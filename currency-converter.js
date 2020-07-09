// Currency Conversion Script
window.onload = function() {
	var sourceCurrency = $("meta[itemprop='priceCurrency']").attr("content");
	console.log("Source Currency: " + sourceCurrency);
	
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
					var conversionRate = json.rates.USD / json.rates.CAD;
					var convertedPrice = parseFloat(rawPrice * conversionRate).toFixed(2);
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
