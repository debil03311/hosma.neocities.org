var b64set = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/'];

$("#navi span").on('click', function() {
	var button = 
	$(this).attr("data-toggle");

	$("#navi span").removeClass("active");
	$(this).addClass("active");

	$("#content>div").css("display","none");
	$(`#${button}`).css("display","block");
});

$("img").on('click', function() {
	$("#gallery").css("display","flex");
	$("#gallery img").attr("src", $(this).attr("src"));
	$("#gallery span").html($(this).attr("src"));
});

$("#gallery").on('click', function() {
	$(this).css("display","none");
});

$("#gallery img").on('click', function() {
	window.location.href = $(this).attr("src");
});


// nvm

$("#b64in").on('keydown', function(e) {
	if(e.which === 13) {
		var input = $("#b64in").val().split('*');

		for (i=0;i<b64set.length;i++) {
			$("#b64out").html().append(input[i]);
		}
	}
});