const clocks = {
    main: {
        div: document.getElementById("clock"),
        hour: document.getElementById("hour"),
        minute: document.getElementById("minute"),
        day: document.getElementById("day"),
        date: document.getElementById("date"),
    },

    others: [
          { delay: -8,
            htmlElement: document.querySelector("#US .clock"),
        },{ delay: -1,
            htmlElement: document.querySelector("#NG .clock"),
        },{ delay: -1,
            htmlElement: document.querySelector("#NO .clock"),
        },{ delay: 6,
            htmlElement: document.querySelector("#PH .clock"),
        },{ delay: 7,
            htmlElement: document.querySelector("#JP .clock"),
        },
    ]
}

const dict = {
    weekdays: {
        Mon:"月曜日", Tue:"火曜日",
        Wed:"水曜日", Thu:"木曜日",
        Fri:"金曜日", Sat:"土曜日",
        Sun:"日曜日",
    },

    months: {
        Jan:"1月", Feb:"2月",
        Mar:"3月", Apr:"4月",
        May:"5月", Jun:"6月",
        Jul:"7月", Aug:"8月",
        Sep:"9月", Oct:"10月",
        Nov:"11月",Dec:"12月",
    }
}

function prefixZero(number, amount) {
    if (number < 10 && number > -1)
        number = "0".repeat(amount) + number;

    return number;
}

var unixDay = 0;

function updateTime() {
    const date = new Date();
    unixDay = date.getTime() / (24*60*60*1000);

    const h = prefixZero(date.getHours(), 1);
    const m = prefixZero(date.getMinutes(), 1);

    // [Ddd, Mmm, DD, YYYY]
    const dateString = date.toDateString().split(" ");
    const youbi = dict.weekdays[dateString[0]];

    clocks.main.hour.innerText = h;
    clocks.main.minute.innerText = m;
    clocks.main.day.innerHTML = youbi;
    clocks.main.date.innerText = `${dateString[3]}年${dict.months[dateString[1]]}${dateString[2]}日`;

    toggleCalendarEvent(dateString[1], dateString[2]);

    for (const c of clocks.others) {
        let _h = parseInt(h) + c.delay;

        if (_h > 23)
            _h -= 24;
        else if (_h < 0) 
            _h += 24;

        c.htmlElement.innerText = prefixZero(_h, 1);
    }

} updateTime();

const updateTimeInterval = setInterval(updateTime, 60*1000);

function toggleCalendarEvent(month, day) {
    const event = calendar[month][day];
    if (!event) return;
    
    calendarText.innerText = event;
    hideElement(calendarElement, false);
}

// Kanji of the day

document.getElementById("kotd-kanji").innerText = kanji[
    Math.floor(unixDay % kanji.length)
];