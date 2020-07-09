// Currency Conversion Script
window.onload = function() {
	$("span.wsite-com-product-price-amount").each(function() {
		var foundPrice = $(this).html();
		if (foundPrice.length > 0) {
			$("<span style=\"display: block; font-size: 0.5em; margin-top: 5px; color: #777777;\">(Approx $0.00 USD)</span>" ).insertAfter($(this));
			console.log("Price Found: " + foundPrice);
		}
	});
}
