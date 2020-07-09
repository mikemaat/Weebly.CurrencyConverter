// Currency Conversion Script
var fixerAPIKey = "74d60121063eb52644fe600dc0bd1b47";

window.onload = function() {
	$("span.wsite-com-product-price-amount").each(function() {
		var foundPrice = $(this).html();
		if (foundPrice.length > 0) {
			$("<span style=\"display: block; font-size: 0.5em; margin-top: 5px; color: #777777;\">(Approx $0.00 USD)</span>" ).insertAfter($(this));
			console.log("Price Found: " + foundPrice);

			// define from currency, to currency, and amount
			from = 'CAD';
			to = 'USD';
			amount = '10';

			// execute the conversion using the "convert" endpoint:
			$.ajax({
				url: 'https://data.fixer.io/api/convert?access_key=' + fixerAPIKey +'&from=' + from + '&to=' + to + '&amount=' + amount,   
				dataType: 'jsonp',
				success: function(json) {
					console.log(json.result);
				}
			});
		}
	});
}
