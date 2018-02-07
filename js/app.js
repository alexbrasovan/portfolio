//Potfolio app
var fixedFooter = function(){
	if( $(window).width() > 768) {
		$(".footer").addClass("fixed-bottom"); 
	}
	else {
		$(".footer").removeClass("fixed-bottom"); 
	}
}

$(window).on("load", fixedFooter);
$(window).on("resize", fixedFooter);

// Tween Animations for Navbar
// var $navbar = $("nav.index-nav");

// TweenMax.from($navbar, 0.6, {
// 	y: -100,
// 	ease: Power2.easeOut
// });


// Tween Animations for Gallery
var $work = $("#gallery .work");
var $heading = $("#gallery h1");

TweenMax.staggerFrom($work, 1, {
	delay: 0.4,
	opacity: 0,
	y: 100,
	scale: 0.8,
	ease: Back.easeOut
}, 0.3);

TweenLite.from($heading, 1, {
	x: -800,
	ease: Power2.easeOut
});

//Tween Animations for Footer
var $footer = $(".index-footer"); 

TweenMax.from($footer, 1, {
	delay: 0.4,
	y: 100,
	scale: 0.3,
	ease: Power4.easeOut
});

//Tween Animations for About Page
var $aboutInfo = $('#about .info');


TweenMax.staggerFrom($aboutInfo, 0.7, {
	y: 200,
	opacity: 0,
	ease: Back.easeOut
}, 0.7);



//Toggle active nav icon
$('.navbar-toggler').on('click', function(){
  		$(this).toggleClass('icon--active');
});


$('.report-card.treehouse').reportCard({
    userName: 'alexbrasovan',
    site: 'treehouse',
    badgesAmount: 5
});