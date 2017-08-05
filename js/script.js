/* smooth scroll */
$(document).ready(function(){ 
	$(".scroll").click(function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
		$('.navbar-default a').removeClass('selected');
		$(this).addClass('selected');
    	});
});

$(document).on('click.bs.collapse.data-api touchstart.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) { 
});

/* ipad screens media query in JavaScript */
var mqls = [ // list of window.matchMedia() queries
  window.matchMedia("(min-width: 768px)"),
  window.matchMedia("(max-width: 800px)"),
];

if (mqls[0].matches && mqls[1].matches) {
  $(".navbar").empty(); //empty navbar when bootstrap doesn't collapse it to prevent blocking the screen. 
}

/* iphone screens media query in JavaScript */
var mqls2 = [ // list of window.matchMedia() queries
  window.matchMedia("(min-width: 300px)"),
  window.matchMedia("(max-width: 800px)"),
];

if (mqls2[0].matches && mqls2[1].matches) {
  $(".time-wrapper").css("border-style", "none");
}


