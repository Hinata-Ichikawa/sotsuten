$(function(){
	var headerfixedbox = document.querySelector('.header-fixed-box').offsetTop;
	var $fixedTarget = $('.header-fixed-box');

	$(window).on('scroll resize load', function () {
		if ($(window).scrollTop() >= headerfixedbox) {
			if (!$fixedTarget.hasClass('fixed')){
				$('.header-fixed-box').addClass('fixed');
				$('.header-layer').animate({
					'opacity': '1'
				}, 300);
			}
		} else {
			if ($fixedTarget.hasClass('fixed')) {
				$('.header-fixed-box').removeClass('fixed');
				$('.header-layer').animate({
					'opacity': '0'
				}, 300);
			}
		}
	});

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
