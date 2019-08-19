var Search, Menu_btn = false;

$(document).ready(function() {
	
	$("#menu-btn-img").click(function(){
		if (Menu_btn) {
			console.log("Yahoooею!!!!!!");
			$(this).attr("src", "images/menu_btn.png");
			//$("#menu").css('display', 'none').slideUp(50);
			$("#menu2").find(".menu-list").slideUp(50);
			Menu_btn = false;
		} else {
			$(this).attr("src", "images/menu_btn2.png");
			//$("#menu").css('display', 'block').slideDown(50);
			$("#menu2").find(".menu-list").slideDown(50);
			Menu_btn = true;
		}
	});

});


