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
