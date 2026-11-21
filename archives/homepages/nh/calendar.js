var date = getu.toString() + niti.toString();

var events = $.getJSON("/misc/homepage/nh/events.json",
	function(data) {
		if (data[getu] && data[getu][niti]) {
			$("style").html(":root { --accent: #c63456;");
			$("#background").css("background-image","url(./bg_red.jpg)"); 
			$(".event").html(data[getu][niti]);
		}
	}
);