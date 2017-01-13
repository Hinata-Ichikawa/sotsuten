$(function(){
	var headerfixedbox = $(".header-fixed-box").offset().top;

	$(window).scroll(function () {

		if ($(window).scrollTop() > headerfixedbox){
			$(".header-fixed-box").addClass("fixed");
			$(".header-layer").animate({
				"opacity": "1"
			},500);
		}else{
			$(".header-fixed-box").removeClass("fixed");
			// $(".header-layer").animate({
			// 	"opacity": "0"
			// },500);
		}
	})

// 	// #で始まるアンカーをクリックした場合に処理
//       $('a[href^=#]').click(function() {
//       // スクロールの速度
//       var speed = 400; // ミリ秒
// 　　　 // 移動先を取得
//       var href= $(this).attr("href");
//       var target = $(href == "#" || href == "" ? 'html' : href);
//       // 移動先を数値で取得
//       var position = target.offset().top;
//       // スムーススクロール
//       $('body,html').animate({scrollTop:position}, speed, 'swing');
//       return false;
//    });

});