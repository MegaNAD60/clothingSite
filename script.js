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