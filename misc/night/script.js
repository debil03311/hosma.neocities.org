
var road = 0;
var post = 0;
var city = 0;


setInterval( function() { 
	road -= 10;
	post -= 4 ;
	city -= 1 ;

	$('.r1').css('background-position', road + 'px -38px');
	$('.r2').css('background-position', road + 'px -38px');
	$('#post').css('background-position', post + 'px 0px');
	$('#city').css('background-position', city + 'px 0px');
}, 10 );


setInterval( function() {
	var hue = $( ".hue" ).val();
	$( 'body' ).css( 'filter', 'hue-rotate(' + hue + 'deg)' );
}, 1);


$('p').click( function () {
	$( this ).css('display', 'none');
});