let currTab;
let homeTab = document.getElementById("home");
let roomsTab = document.getElementById("rooms");
let activitiesTab = document.getElementById("activities");
let mapTab = document.getElementById("map");
let aboutTab = document.getElementById("about");
let html = document.getElementsByTagName('html');
let tabBox = document.getElementsByClassName('tabs');
let tabs = [homeTab, roomsTab, activitiesTab, mapTab, aboutTab]

function tabMapping(currTab) {
    for(let i = 0; i < 5; i++) {
        if(i != currTab) {
            tabs[i].addEventListener("mouseenter", function() {
                tabs[i].style.backgroundColor = "white";
                tabs[i].style.color = "#0156B9";
            })
            tabs[i].addEventListener("mouseleave", function() {
                tabs[i].style.backgroundColor = "#0156B9";
                tabs[i].style.color = "white";
            })
        }
    }
};
// console.log(tabs[1].style);

// homeTab.setAttribute("href", "index.html");
// roomsTab.setAttribute("href", "rooms.html");




if(window.location.pathname == "/index.html") {
    homeTab.style.backgroundColor = "#4E96EA";
    roomsTab.setAttribute("href", "rooms.html");
    activitiesTab.setAttribute("href", "activities.html");
    mapTab.setAttribute("href", "map.html");
    aboutTab.setAttribute("href", "about.html");
    tabMapping(0);
}
if(window.location.pathname == "/rooms.html") {
    roomsTab.style.backgroundColor = "#4E96EA";
    homeTab.setAttribute("href", "index.html");
    activitiesTab.setAttribute("href", "activities.html");
    mapTab.setAttribute("href", "map.html");
    aboutTab.setAttribute("href", "about.html");
    tabMapping(1);

    let king = document.getElementById("king");
    let queen = document.getElementById("queen");
    king.addEventListener("click", function(){
        king.innerHTML = "All done!"
    })
    queen.addEventListener("click", function(){
        queen.innerHTML = "All done!"
    })
}
if(window.location.pathname == "/activities.html") {
    console.log("activity page")
    activitiesTab.style.backgroundColor = "#4E96EA";
    homeTab.setAttribute("href", "index.html");
    roomsTab.setAttribute("href", "rooms.html");
    mapTab.setAttribute("href", "map.html");
    aboutTab.setAttribute("href", "about.html");
    tabMapping(2);
}
if(window.location.pathname == "/map.html") {
    mapTab.style.backgroundColor = "#4E96EA";
    roomsTab.setAttribute("href", "rooms.html");
    activitiesTab.setAttribute("href", "activities.html");
    homeTab.setAttribute("href", "index.html");
    aboutTab.setAttribute("href", "about.html");
    tabMapping(3);
}
if(window.location.pathname == "/about.html") {
    aboutTab.style.backgroundColor = "#4E96EA";
    roomsTab.setAttribute("href", "rooms.html");
    activitiesTab.setAttribute("href", "activities.html");
    homeTab.setAttribute("href", "index.html");
    mapTab.setAttribute("href", "map.html");
    tabMapping(4);
}

    
// // function mobile(){
// //     document.getElementsByTagName('html').addEventListener(windo
// // }

// if(window.innerWidth < 985){
//     // tabBox.style.gridTemplateColumns = ";
//     tabBox.style.gridTemplateRows = "20% 20% 20% 20% 20%";
// }
// else {
//     tabBox.style.gridTemplateColumns = "20% 20% 20% 20% 20%";

// }
// console.log(window.innerWidth)