var Search, Menu_btn = false;

$(document).ready(function() {
	//$(document).ready(function(){
		$("#owl777").owlCarousel({
			//center: true, autoplay: true, dotsContainer: true, margin: 40
			loop: true, nav: true, navText: "",
			responsive: {0: {items: 1}, 540: {items: 2}, 770: {items: 3}, 1024: {items: 4}}
		});
		$("#owl2").owlCarousel({
			//center: true, autoplay: true, dotsContainer: true, margin: 40
			loop: true, nav: true, navText: "",
			responsive: {0: {items: 1}, 600: {items: 2}, 920: {items: 3}, 1200: {items: 4}}
		});
		$("#owl4").owlCarousel({
			loop: true, nav: true, navText: "", //margin: 16, 
			responsive: {0: {items: 1}, 540: {items: 2}, 770: {items: 3}, 1200: {items: 5}}
		});
		
		$("#owl5").owlCarousel({
			loop: true, nav: true, navText: "", //margin: 26, 
			responsive: {0: {items: 1},400: {items: 2}, 560: {items: 3}, 680: {items: 4}, 840: {items: 5}, 1000: {items: 6}, 1188: {items: 7}}
		});
		
		$("#owl6").owlCarousel({
			loop: true, nav: false, navText: "", //margin: 2, 
			responsive: {0: {items: 1}, 410: {items: 2}, 640: {items: 3}, 820: {items: 4}, 1020: {items: 5}, 1180: {items: 6}}
		});
	// });
	
	$(".feedback-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(".feedback-form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
				/*	setTimeout(function() {
						$.fancybox.close();
					}, 1000); */
		});
		return false;
	});
	
	$("#wwc-carousel").waterwheelCarousel({
      // http://www.bkosborne.com/jquery-waterwheel-carousel/options
	  // option: value,
		flankingItems: 3,
		separation: 200,
		sizeMultiplier: 0.8,
		opacityMultiplier: 1,
		//separationMultiplier: 0.6, <<<< default
		//horizonOffset: -20,
		//startingItem: 1,
		//autoPlay:2000,
		keyboardNav: true
    });
	
	$("#menu_btn").rotate({
		bind:{
			click: function(){
			  //$(this).rotate({ angle:0,animateTo:180,easing: $.easing.easeInOutExpo })
				if (Menu_btn) {
					$(this).rotate({duration:200, animateTo: 0}); // <<<< так будет плавный поворот
					//$(this).rotate(0); // <<<< а так сразу поворачивает
					$(".menu").css('display', 'none');
					$(".menu_mob").css('display', 'none');
					Menu_btn = false;
				} else {
					$(this).rotate({duration:200, animateTo: 90}); // <<<< так будет плавный поворот
					$(".menu").css('display', 'block');
					$(".menu_mob").css('display', 'block');
					//$(this).rotate(90); // <<<< а так сразу поворачивает 
					Menu_btn = true;
				}
			}
		}
	});
						$("#menu_btn777").click(function(){	// <<<< второй вариант(укороченный) ф-ии выше, но почему-то клинит 
															// в IEтестере (IE8) после первого клика
							if (Menu_btn) {
								//$(this).rotate({ animateTo: 0}); // <<<< так будет плавный поворот
								$(this).rotate(0);
								Menu_btn = false;
							} else {
								//$(this).rotate({ animateTo: 90}); // <<<< так будет плавный поворот
								$(this).rotate(90);
								Menu_btn = true;
							}
						});
	
	$(".menu_mob .submenu_2-div").hide().prev().click(function(){
		if($(this).parent().hasClass("submenu_1 list")) {
			$(".submenu_2-div").slideUp(50);
			$(this).next().slideDown(50);
			$('.submenu_1.list-active').removeClass('list-active').addClass('list');
			$(this).parent().removeClass('list').addClass('list-active');
		} else {
			$(this).parent().removeClass('list-active').addClass('list');
			$(this).next().slideUp(50);
		}
	});	
	
	
	

});

$(".search").click(function() {
	if (!Search) {
		$(".header-right-div").css('display', 'none');
		$(".header-right-div2").css('display', 'block');
		Search = true;
	} else {
		$(".header-right-div2").css('display', 'none');
		$(".header-right-div").css('display', 'block');
		Search = false;
	}
});



