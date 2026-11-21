
var nsfw = 0;

$('#top b').click(function() {
	if (nsfw == 0) {
		nsfw = 1;
		$('.dirty').css('display', 'block');
		$(this).html('ON');
	} else {
		nsfw = 0;
		$('.dirty').css('display', 'hidden');
		$(this).html('OFF');
	}
});

$('#jump').on('keyup', function (e) {
    if (e.keyCode === 13) {
       window.location.href = "#" + $(this).val();
    }
});