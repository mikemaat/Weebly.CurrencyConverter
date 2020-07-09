// Currency Conversion Script
var fixerAPIKey = "123";

window.onload = function() {
	$("span.wsite-com-product-price-amount").each(function() {
		var priceSpan = $(this);
		var foundPrice = $(this).html();
		if (foundPrice.length > 0) {
			console.log("Price Found: " + foundPrice);
			var indexOfDollarSign = foundPrice.indexOf('$') + 1;
			var rawPrice = foundPrice.substr(indexOfDollarSign, foundPrice.length - indexOfDollarSign);
			
			$.ajax({
				url: 'https://api.exchangeratesapi.io/latest',   
				dataType: 'json',
				success: function(json) {
					console.log("CAD: " + json.rates.CAD);
					console.log("USD: " + json.rates.USD);
					var conversionRate = json.rates.CAD / json.rates.USD;
					console.log("Conversion Rate: " + conversionRate);
					var convertedPrice = parseFloat(rawPrice * conversionRate).toFixed(2);
					console.log("Converted Price: " + convertedPrice);
					$("<span style=\"display: block; font-size: 0.5em; margin-top: 5px; color: #777777;\">(Approx $" + convertedPrice + " USD)</span>" ).insertAfter(priceSpan);
				},
				error: function(XHR, textStatus, errorThrown) {
					console.log("error: " + textStatus);
					console.log("error: " + errorThrown);
				}
			});
		}
	});
}
