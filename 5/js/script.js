
$('body').prepend('<div id = "darken"></div>')

$('header').hover(function(){

	$(this).css({
		'left': '0',
		'border-right': 'solid 2px #AAA'
	});
	$('body').css(
		'left', '160px'
	);

}, function(){

	$(this).css({
		'left': '-220px',
		'border-right': 'solid 4px #AAA'
	});
	$('body').css(
		'left', '0'
	);

});



$( 'body' ).prepend('<center><h1>hosma</h1><h3 class = "title"><small>a thing about things</small></h3></center>')