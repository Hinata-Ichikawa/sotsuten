$(function(){
	var headerfixedbox = $(".header-fixed-box").offset().top;
	var $fixedTarget = $('.header-fixed-box');
	$(window).scroll(function () {

<<<<<<< HEAD
		if ($(window).scrollTop() > headerfixedbox){
			$(".header-fixed-box").addClass("fixed");
			$(".header-layer").animate({
				"opacity": "1"
			},800);
		}else{
			$(".header-fixed-box").removeClass("fixed");
			// $(".header-layer").animate({
			// 	"opacity": "0"
			// },500);
=======
		if ($(window).scrollTop() > headerfixedbox) {　// スクロール位置が下の方だったら
			if (!$fixedTarget.hasClass('fixed')) {　// ヘッダーが固定されてなかったら
				$(".header-fixed-box").addClass("fixed");
				$(".header-layer").animate({
					"opacity": "1"
				}, 300);
			}
		} else { // スクロール位置が上の方だったら
			if ($fixedTarget.hasClass('fixed')) { // ヘッダーが固定されていたら
				$(".header-fixed-box").removeClass("fixed");
				$(".header-layer").animate({
					"opacity": "0"
				}, 300);
			}
>>>>>>> df30d3f84cd20a6e4c625de8b83a44370324bd1a
		}
	})

	// スムーススクロール
	$('a[href^="#"]').on('click', function() {
	    var speed = 300;
	    var href = $(this).attr('href');
	    var target = $(href == '#' || href == '' ? 'html' : href);
	    var position = target.offset().top;
	    $('body, html').animate({ scrollTop: position }, speed, 'swing');
	    return false;
	});

});
