$(document).ready(function() {
	//$("#in_pricing").hide();
	$("img").css("vertical-align","bottom");
	$(".plan").mouseenter(function() {
		$(this).css("-webkit-transition","all 0.5s ease-out");
		$(this).css("-moz-transition","all 0.5s ease");
		$(this).css("-o-transition","all 0.5s ease");
		if ($(this).find("h3.qty").length != 0) {
			$(this).find("h3.qty").css("color","#FFFFFF");
			$(this).css("background-color","black");
			$(this).find("h3.qty").css("font-size","40px");
			$(this).find("h3.qty").css("font-weight","bold");
		}
		
	});

	$(".plan").mouseleave(function() {
		$(this).css("background-color","#fff");
		$(this).find("h3.qty").css("color","#1189D9");
		$(this).find("h3.qty").css("font-size","30px");
		$(this).find("h3.qty").css("font-weight","normal");
	});

	$(".nested_accordian").mouseenter(function() {
		$(this).css("-webkit-transition","all 0.5s ease-out");
		$(this).css("-moz-transition","all 0.5s ease");
		$(this).css("-o-transition","all 0.5s ease");
		if ($(this).find("h4.qty").length != 0) {
			$(this).find("h4.qty").css("font-size","25px");
			$(this).find("h4.qty").css("font-weight","bold");
		}
	});

	$(".nested_accordian").mouseleave(function() {
		$(this).find("h4.qty").css("color","black");
		$(this).find("h4.qty").css("font-weight","bold");
		$(this).find("h4.qty").css("font-size","20px");
	});
});