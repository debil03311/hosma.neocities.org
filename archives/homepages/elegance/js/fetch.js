const html = document.createElement("html");

// Brainly

const brainly = {
    requestUrl: "https://brainly.ro/graphql/ro?operationName=feed&variables=",
    htmlElement: document.getElementById("brainly"),
    questionUrlBase: "https://brainly.ro/tema/",

    variables: encodeURIComponent(JSON.stringify({
        "subjectIds":[15],
        "first":8,
    })),

    extensions: encodeURIComponent(JSON.stringify({
        "persistedQuery":{
            "version":1,
            "sha256Hash":"a18dcee8ff57280c79a46e830df335650f7c74a60266dceb332a055b8a315b16"
        }
    })),
}

brainly.requestUrl += brainly.variables
    + "&extensions="
    + brainly.extensions

request({
    type: "GET",
    url: brainly.requestUrl,
    callback: loadBrainly,
});

function loadBrainly(response) {
    const data = JSON.parse(response).data.feed.edges;
    for (const q of data) {
        const question = document.createElement("a");
        question.innerHTML = q.node.content;
        question.href = brainly.questionUrlBase + q.node.databaseId;
        brainly.htmlElement.append(question);
    }
}

// Cirno

const cirnoElements = [
    document.getElementById("cirno-brand-new"),
    document.getElementById("cirno-second-hand"),
]

request({
    type: "GET",
    url: "https://solarisjapan.com/products/touhou-project-cirno-fumofumo-touhou-plush-series-09-angeltype-gift.json",
    callback: loadSolaris,
});

function loadSolaris(response) {
    const data = JSON.parse(response).product.variants;
    cirnoElements[0].innerText
        = `${data[0].price} ${data[0].taxable ? "taxable" : ""}`;
    cirnoElements[1].innerText
        = `${data[1].price} ${data[1].taxable ? "taxable" : ""}`;
}