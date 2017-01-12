window.onload = function(){
	var headerfixedbox = $(".header-fixed-box").offset().top;

	$(window).scroll(function () {

		if ($(window).scrollTop() > headerfixedbox){
			$(".header-fixed-box").addClass("fixed");
			// $(".header-fixed").css({"top": "0vh"});
		}else{
			$(".header-fixed-box").removeClass("fixed");
			// $(".header-fixed").css({"top": "90vh"});
		}
	})
}