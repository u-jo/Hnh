$(document).ready(function() {
	var cssElement = "";
	var content = ".tab-selector-";
	var num = 1;
	for (var i = 1; i < 6; i++) {
		cssElement = content + i;
		if ($(cssElement).is(':checked')) {
			num = i;
			break;
		}
	}
	var height = $('.content-' + num).height();

	$(".pure-u-2-3").height(height);
	$("input[name=radio-set]:radio").click(function() {
		var cusHeight = $(".content-1").height();
		var selectedButton = $("input[name=radio-set]:checked").val();
		if (selectedButton == "Show") {
			var cusHeight = $(".content-1").height();
			$(".pure-u-2-3").height(cusHeight);
		}
		if (selectedButton == "Cast") {
			var cusHeight = $(".content-2").height();
			$(".pure-u-2-3").height(cusHeight);
		}
		if (selectedButton == "Orchestra") {
			var cusHeight = $(".content-3").height();
			$(".pure-u-2-3").height(cusHeight);
		}
		if (selectedButton == "Production") {
			var cusHeight = $(".content-4").height();
			$(".pure-u-2-3").height(cusHeight);
		}
		if (selectedButton == "Showtimes") {
			var cusHeight = $(".content-5").height();
			$(".pure-u-2-3").height(cusHeight);
		}
	});


});