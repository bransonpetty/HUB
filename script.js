/*script.js file has the main purpose of managing 
consistent elements and their functionality. The
tabMapping function along with the if statements 
determine which tabs are allowed responsive elements
such as links and style alteration with mouse hover.

Changes include altering color scheme for dark mode,
default theme on load, and altering cover image for
dark mode. Needs to maintain theme upon switching pages
*/


let currTab;
let homeTab = document.getElementById("home");
let roomsTab = document.getElementById("rooms");
let activitiesTab = document.getElementById("activities");
let mapTab = document.getElementById("map");
let aboutTab = document.getElementById("about");
let html = document.getElementsByTagName('html');
let tabBox = document.getElementsByClassName('tabs');
let styleTag = document.querySelector("link[href='style.css']");
let light = document.getElementById("themeLight");
let dark = document.getElementById("themeDark");
let tabs = [homeTab, roomsTab, activitiesTab, mapTab, aboutTab];

let coverPhoto = document.getElementById("cover");
let currCover = "cover photo.webp";
let currTheme = "style.css";
styleTag.setAttribute("href", currTheme);


let primaryColor = "#4E96EA";
let secondaryColor = "#0156B9";

light.addEventListener("click", function(){
    currTheme = "style.css"
    styleTag.setAttribute("href", currTheme)
    console.log('hi')
    primaryColor = "#4E96EA";
    secondaryColor = "#0156B9";
    currCover = "cover photo.webp"
    tabStyle()
})

dark.addEventListener("click", function(){
    currTheme = "styleOverride.css"
    styleTag.setAttribute("href", currTheme)
    console.log(styleTag)
    primaryColor = "#34373B";
    secondaryColor = "#7147e6"
    currCover = "nightCover.jpeg"
    tabStyle()
})

function tabMapping(currTab) { //gives all tab elements responsive styling except for current tab
    for(let i = 0; i < 5; i++) {
        if(i != currTab) {
            tabs[i].style.backgroundColor = secondaryColor;
            tabs[i].addEventListener("mouseenter", function() {
                tabs[i].style.backgroundColor = "white";
                tabs[i].style.color = secondaryColor;
            })
            tabs[i].addEventListener("mouseleave", function() {
                tabs[i].style.backgroundColor = secondaryColor;
                tabs[i].style.color = "white";
            })
        }
    }
};



if(styleTag.getAttribute("href") == "style.css") {
    primaryColor = "#4E96EA";
    tabStyle()
}

if(styleTag.getAttribute("href") == "styleOverride.css") {
    primaryColor = "#34373B";
    console.log("hi")
}

if(window.location.pathname == "/") { //This is to declare the default tab upon navigation
    window.location.pathname = "/index.html"
}

function tabStyle() {    
    if(window.location.pathname == "/index.html") { //home tab
        homeTab.style.backgroundColor = primaryColor;
        roomsTab.setAttribute("href", "rooms.html");
        activitiesTab.setAttribute("href", "activities.html");
        mapTab.setAttribute("href", "map.html");
        aboutTab.setAttribute("href", "about.html");
        coverPhoto.setAttribute("src", currCover)
        tabMapping(0);
    }
    if(window.location.pathname == "/rooms.html") {//rooms tab
        roomsTab.style.backgroundColor = primaryColor;
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
    if(window.location.pathname == "/activities.html") {//activites tab
        console.log("activity page")
        activitiesTab.style.backgroundColor = primaryColor;
        homeTab.setAttribute("href", "index.html");
        roomsTab.setAttribute("href", "rooms.html");
        mapTab.setAttribute("href", "map.html");
        aboutTab.setAttribute("href", "about.html");
        tabMapping(2);
    }
    if(window.location.pathname == "/map.html") {//map tab
        mapTab.style.backgroundColor = primaryColor;
        roomsTab.setAttribute("href", "rooms.html");
        activitiesTab.setAttribute("href", "activities.html");
        homeTab.setAttribute("href", "index.html");
        aboutTab.setAttribute("href", "about.html");
        tabMapping(3);
    }
    if(window.location.pathname == "/about.html") {//about tab
        aboutTab.style.backgroundColor = primaryColor;
        roomsTab.setAttribute("href", "rooms.html");
        activitiesTab.setAttribute("href", "activities.html");
        homeTab.setAttribute("href", "index.html");
        mapTab.setAttribute("href", "map.html");
        tabMapping(4);
    }
}