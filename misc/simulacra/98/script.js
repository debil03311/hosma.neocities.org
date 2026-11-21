
function menuShow() {

	$("#start").css("visibility", "hidden");
	$("#start-menu").css("visibility", "visible");

}

function menuHide() {

	$("#start").css("visibility", "visible");
	$("#start-menu").css("visibility", "hidden");

}

function errShow() {

	$("#w-error").css("visibility", "visible");

}

function errHide() {

	$("#w-error").css("visibility", "hidden");

}

function nnBShow() {

	$("#b-title").css("visibility", "visible");
	document.getElementById("b-window").src = "http://networkneighborhood.neocities.org/";

}

function nnBHide() {

	$("#b-title").css("visibility", "hidden");
	document.getElementById("b-window").src = "";

}

function time() {

	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	m = checkTime(m);

	if (h >= 12) {

		document.getElementById("clock").innerHTML = h + ":" + m + " PM";

	} else {

		document.getElementById("clock").innerHTML = h + ":" + m + " AM"

	}

}

function checkTime(i) {

    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;

}