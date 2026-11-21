// URL of the current page without any parameters.
// const baseUrl = window.location.origin + window.location.pathname;
const baseUrl = "/10/"

const nav = document.getElementById("nav");
const main = document.getElementById("main");
const jumpToTop = document.getElementById("jump-to-top");

// Make jump to top button visible if <main> is scrolled.

main.addEventListener("scroll",()=> {
    (main.scrollTop > 0)
        ? jumpToTop.classList.remove("invisible")
        : jumpToTop.classList.add("invisible")
});

// Once the body of the page finishes loading,
// get the URL parameters and begin loading the
// respective page (if any).

function bodyLoadCallback() {
    setTheme(localStorage.ten_theme);

    const params = new URLSearchParams(window.location.search);

    const page = params.get("page");
    const toid = params.get("toid");

    loadPage(
        page ? page : "home",
        toid
    );
}

// Request the specified html file and load its
// content into the <main> element. Also updates
// history to reflect these changes.

function loadPage(filename, toid) {
    filename = filename.toLowerCase();

    // Change the tab title
    document.title = `${filename} - hosma`;

    // Fetch the corresponding .html file and load
    // its HTML into the <main> element

    fetch(`${baseUrl}page/${filename}.html`)
        .then((resp)=> resp.text())
        .then((htmlData)=> {
            if (!htmlData) return;
            main.innerHTML = htmlData;

            setUrlParam("page", filename, document.title);
            (toid) && document.getElementById(toid).scrollIntoView();

            // Special post-load handling
            if (loadPageCallback[filename])
                loadPageCallback[filename]();
        });
}

const loadPageCallback = {
    blog:(filename)=> {
        document.querySelectorAll(".blog-timestamp")
        .forEach((el)=> {
            el.onclick=()=> goToId(el.dataset.goto);
        });
    },

    dreams:(filename)=> {
        document.querySelectorAll(".dream-index")
        .forEach((el)=> {
            el.onclick=()=> goToId(el.innerText);
        });
    },

    comments: loadHcb,
}

// Jump to an element on the page that has the
// specified ID.

function goToId(id) {
    main.scrollTo(0,
        document.getElementById(id).offsetTop
    );
    // document.getElementById(id).scrollIntoView(0);
    setUrlParam("toid", id, document.title);
}

// Update URL parameters and the URL itself.

function setUrlParam(param, value, title) {
    // Generate a new url with the given filename as the `page` param.
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set(param, value);

    // How the fuck does this piece of shit work oh my fucking god
    // window.history.pushState(null, title, newUrl);
    window.history.replaceState(null, title, newUrl);
}

// Toggle the display of NSFW dream entries

function toggleNsfw() {
    document.querySelectorAll(".nsfw-content").forEach((el)=> {
        el.classList.toggle("hidden");
    });

    document.getElementById("toggle-nsfw").classList.toggle("nsfw-on");
}

// dori dori dori
const cat = document.getElementById("cat");

function toggleCat(className, navButton) {
    cat.classList.toggle(className);
    navButton.classList.toggle("toggled");
}

// money money money
const reimu = document.getElementById("reimu");

function toggleReimu() {
    reimu.animate([{
        top: "-50%",
        right: "28%",
    },{
        top: "30%",
        right: "36%",
        offset: 0.5,
    },{
        top: "100%",
        right: "42%",
        offset: 1,
    }], 600);
}