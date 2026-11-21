
function time() {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);

    if (h >= 12) {

        $( ".time" ).text( h + ":" + m );

    } else {

        $( ".time" ).text( h + ":" + m );

    }

}

function checkTime(i) {

    if (i < 10) {       //
        i = "0" + i     // add zero in front of numbers < 10
    };                  //
    
    return i;

}

time();