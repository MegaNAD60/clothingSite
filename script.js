/*----------index.html backToTopBtn javascript code----------*/
mybutton=document.getElementById("back-to-top");
window.onscroll = function(){scrollFunction()};
function topFunction(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
} 

$(function(){
	var c=0;
	$(".navbar-toggler").click(function(){
		$("#navbarCollapse").stop().animate({right:2*100 }, 'slow');
	});
});


(function ($) {
	var navbar = $('.navbar');
	var lastScrollTop = 0;
	
	$(window).scroll(function () {
		var st = $(this).scrollTop();
		if (st > lastScrollTop) {
			navbar.fadeOut();
		}
		else if(st < lastScrollTop && st > 200){
			navbar.fadeIn();
			navbar.removeClass('navbar-light bg-transparent').addClass('navbar-dark bg-custom');
		}
		else {
			navbar.removeClass('navbar-dark bg-custom').addClass('navbar-light bg-transparent');
		}
		lastScrollTop = st;
	});
	
})(jQuery);
	