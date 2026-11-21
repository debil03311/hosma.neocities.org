

function time() {

    var dateObj = new Date();
    var yearday = dateObj.getUTCDate();

    var days = [ 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday' ];

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var day = days[ today.getDay() ];
    m = checkTime(m);

    if (h >= 12) {

        $( ".clock" ).text( h + ":" + m + " PM" );
        $( ".day" ).text( day );

    } else {

        $( ".clock" ).text( h + ":" + m + " AM" );
        $( ".day" ).text( day );

    }

}



function checkTime(i) {

    if (i < 10) {       //
        i = "0" + i     //   add zero in front of numbers < 10
    };                  //
    
    return i;

}

time(); setInterval(function(){ time(); }, 3000);       // loop