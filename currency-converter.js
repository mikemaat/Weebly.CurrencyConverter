// Currency Conversion Script
var fixerAPIKey = "123";

window.onload = function() {
	$("span.wsite-com-product-price-amount").each(function() {
		var foundPrice = $(this).html();
		if (foundPrice.length > 0) {
			console.log("Price Found: " + foundPrice);
			var indexOfDollarSign = foundPrice.indexOf('$') + 1;
			var rawPrice = foundPrice.substr(indexOfDollarSign, foundPrice.length - indexOfDollarSign);

			$.ajax({
			    url: 'http://data.fixer.io/api/latest?access_key=' + fixerAPIKey,   
			    dataType: 'jsonp',
			    success: function(json) {
			    	alert(json.rates.CAD);
			    	alert(json.rates.USD);
			    	var conversionRate = json.rates.CAD / json.rates.USD;
				alert(conversionRate);
			    	var convertedPrice = parseFloat(rawPrice * conversionRate).toFixed(2);
				$("<span style=\"display: block; font-size: 0.5em; margin-top: 5px; color: #777777;\">(Approx $" + convertedPrice + " USD)</span>" ).insertAfter($(this));
			    }
			});
		}
	});
}
