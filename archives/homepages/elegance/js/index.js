const warning = document.getElementById("warning");

const bgImages = [
    "alex-knight-5-GNa303REg-unsplash.jpg",
    "clay-banks-hwLAI5lRhdM-unsplash.jpg",
    "dale-scogings-_SBsVi4kmkY-unsplash.jpg",
    "danis-lou-jfZfdQtcH6k-unsplash.jpg",
    "manuel-cosentino-7IO8Uei5TzA-unsplash.jpg",
    "redd-wPMvPMD9KBI-unsplash.jpg",
    "su-san-lee-E_eWwM29wfU-unsplash.jpg",
    "tianshu-liu-aqZ3UAjs_M4-unsplash.jpg",
    "tianshu-liu-khQY5Eu-aa0-unsplash.jpg",
    "tianshu-liu-SBK40fdKbAg-unsplash.jpg",
    "yu-kato-cddaZDt6uRw-unsplash.jpg",
];

// Randomness

const rArr=a=> a[Math.floor(Math.random()*a.length)];
const rRng=r=> Math.floor(Math.random()*r);

// Hide HTML element

hideElement=(element, bool)=> {
    switch (bool) {
        case true:
            element.classList.add("hidden")
            break;

        case false:
            element.classList.remove("hidden")
            break;

        case undefined:
            element.classList.toggle("hidden")
            break;
    }
}

// HTTP request wrapper

function request({type,url,data,callback,headers,credentials}={}) {
    const x = new XMLHttpRequest();
    x.withCredentials = !!credentials;

    x.open(type,url,false);
    if (headers) for (h of Object.keys(headers))
        x.setRequestHeader(h, headers[h]);

    x.onreadystatechange=()=> callback(x.responseText);
    x.send(data ? data : null);

    return x.responseText;
}

// Set random background

document.body.style.backgroundImage = "url('./bg/"+rArr(bgImages)+"')";

// Warning cookie exists?

if (!document.cookie.get("coomer"))
    hideElement(warning, false);

// Set warning closed cookie

function closeWarning() {
    document.cookie.set({
        name: "coomer",
        value: true,
    });

    hideElement(warning, true);
}