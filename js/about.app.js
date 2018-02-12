//Global Scripts

//Make Footer fixed for large screens
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


//Toggle active nav icon
$('.navbar-toggler').on('click', function(){
  		$(this).toggleClass('icon--active');
});

//Tween Animations for About Page
var $aboutInfo = $('#about .info');

TweenMax.staggerFrom($aboutInfo, 0.7, {
	y: 200,
	opacity: 0,
	ease: Back.easeOut
}, 0.7);

//Init Treehouse report card
$('.report-card.treehouse').reportCard({
    userName: 'alexbrasovan',
    site: 'treehouse',
    badgesAmount: 5
});