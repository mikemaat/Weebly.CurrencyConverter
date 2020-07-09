// Currency Conversion Script
window.onload = function() {
	$("span.wsite-com-product-price-amount").each(function() {
		var foundPrice = $(this).html();
		if (foundPrice.length > 0) {
			
			console.log("Price Found: " + foundPrice);
			
			var indexOfDollarSign = foundPrice.indexOf('$') + 1;
			var rawPrice = foundPrice.substr(indexOfDollarSign, foundPrice.length - indexOfDollarSign); 
			
			console.log("Raw Price: " + rawPrice);
			
			$("<span style=\"display: block; font-size: 0.5em; margin-top: 5px; color: #777777;\">(Approx $" + (rawPrice * 0.74) + " USD)</span>" ).insertAfter($(this));
		}
	});
}
