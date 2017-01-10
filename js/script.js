window.onload = function(){
	var headerfixedbox = $(".header-fixed-box").offset().top;

	$(window).scroll(function () {

		if ($(window).scrollTop() > headerfixedbox){
			$(".header-fixed-box").css({"position": "fixed", "top": "0px", "background-image": "url(images/sky.png)"});
		}else{
			$(".header-fixed-box").css({"position": "relative","top": "90vh","background-image": "none"});
		}
	})
}