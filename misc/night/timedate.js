
function time() {

    var dateObj = new Date();
    var yearday = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var days = [ 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday' ];
    var months = [ 'January','February','March','April','May','June','July','August','September','October','November','December' ];

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var day = days[ today.getDay() ];
    var month = months[ today.getMonth() ];
    newdate = month + " " + yearday + ", " + year;
    m = checkTime(m);

    if (h >= 12) {

        h -= 12;
        $( ".clock" ).text( h + ":" + m + " PM" );
        $( ".date" ).text( newdate );

    } else {

        $( ".clock" ).text( h + ":" + m + " AM" );
        $( ".date" ).text( newdate );

    }

}

function checkTime(i) {

    if (i < 10) {       //
        i = "0" + i     //  add zero in front of numbers < 10
    };                  //
    
    return i;

}

setInterval( function() {
    time();
}, 1);
