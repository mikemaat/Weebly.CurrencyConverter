// Currency Conversion Script
window.onload = function() {
	$("span.wsite-com-product-price-amount").each(function() {
		var foundPrice = $(this).html();
		if (foundPrice.length > 0) {
			console.log("Price Found: " + foundPrice);
			var indexOfDollarSign = foundPrice.indexOf('$') + 1;
			var rawPrice = foundPrice.substr(indexOfDollarSign, foundPrice.length - indexOfDollarSign); 
			var convertedPrice = parseFloat(rawPrice * 0.74).toFixed(2);
			$("<span style=\"display: block; font-size: 0.5em; margin-top: 5px; color: #777777;\">(Approx $" + convertedPrice + " USD)</span>" ).insertAfter($(this));
		}
	});
}
