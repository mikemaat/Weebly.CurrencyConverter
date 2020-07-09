// Currency Conversion Script
window.onload = function() {
	$("span.wsite-com-product-price-amount").each(function() {
		console.log("Price Found: " + $(this).html());
	});
}