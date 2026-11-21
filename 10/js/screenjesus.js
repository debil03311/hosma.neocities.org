const pageName = window.location.pathname.split("/").pop().match(/.*(?=\.)/)[0];

// I JUST fucking realized this should apply to everyone fml
document.location.href = "/10/?page="+pageName;

// const screenjesusIPs = [
//     "69.195.131.58",
//     "66.85.74.162",
// ];

// fetch("https://api.ipify.org?format=json")
//     .then((resp)=> resp.json())
//     .then((data)=> {
//         if (screenjesusIPs.includes(data.ip)) {
//             document.location.href = "http://localhost/neocities/10b/?page="+pageName;
//         }
//     })