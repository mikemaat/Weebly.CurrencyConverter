// Currency Conversion Script
window.onload = function() {
	$("span.wsite-com-product-price-amount").each(function() {
		var foundPrice = $(this).html();
		if (foundPrice.length > 0) {
			console.log("Price Found!!!: " + foundPrice);
		}
	});
}
