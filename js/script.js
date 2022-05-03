/*script.js file has the main purpose of managing 
consistent elements and their functionality. The
tabMapping function along with the if statements 
determine which tabs are allowed responsive elements
such as links and style alteration with mouse hover.

Changes include altering color scheme for dark mode,
default theme on load, and altering cover image for
dark mode. Needs to maintain theme upon switching pages


P5 update: I removed a footer style function that wasn't 
working properly. Put js files into folders
*/


let currTab = 0;
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
let footer = document.getElementById("footer");
let tabs = [homeTab, roomsTab, activitiesTab, mapTab, aboutTab];
// let currTab = 0;
let shownTab = homeTab;

let coverPhoto = document.getElementById("cover");
let currCover = "cover photo.webp";
let currTheme = "style.css";
styleTag.setAttribute("href", currTheme);


let homeSection = document.getElementById("homeSection");
let roomsSection = document.getElementById("roomsSection");
let activitiesSection = document.getElementById("activitiesSection");
let mapSection = document.getElementById("mapSection");
let aboutSection = document.getElementById("aboutSection");

roomsSection.style.display = "none";
activitiesSection.style.display = "none";
mapSection.style.display = "none";
aboutSection.style.display = "none";

let primaryColor = "#4E96EA";
let secondaryColor = "#0156B9";

light.addEventListener("click", function(){
    currTheme = "style.css"
    styleTag.setAttribute("href", currTheme)
    console.log('hi')
    primaryColor = "#4E96EA";
    secondaryColor = "#0156B9";
    coverPhoto.setAttribute("src", "cover photo.webp");
    tabMapping(currTab)
    colorRes()
    tabs[currTab].style.backgroundColor = primaryColor;
    // tabStyle()
})

dark.addEventListener("click", function(){
    currTheme = "styleOverride.css"
    styleTag.setAttribute("href", currTheme)
    console.log(styleTag)
    primaryColor = "#34373B";
    secondaryColor = "#7147e6"
    coverPhoto.setAttribute("src", "nightCover.jpeg");
    tabMapping(currTab)
    colorRes()
    tabs[currTab].style.backgroundColor = primaryColor;
    // tabStyle()
})



// function mouseOn() {
//     console.log("is this working")
//     tabs[i].style.backgroundColor = "white";
//     tabs[i].style.color = secondaryColor;
// }

// function mouseOff() {
//     tabs[i].style.backgroundColor = secondaryColor;
//     tabs[i].style.color = "white";
// }
// // console.log(homeSection.style.display);

// function mouseClick() {
//     if(shownTab == homeTab) {
//         // console.log("homeTab")
//         // console.log(test)
//         homeSection.style.display = "";
//         roomsSection.style.display = "none";
//         activitiesSection.style.display = "none";
//         mapSection.style.display = "none";
//         aboutSection.style.display = "none";
//     }
//     else if(shownTab == roomsTab) {
//         console.log("this is wrong")
//         homeSection.style.display = "none";
//         roomsSection.style.display = "";
//         activitiesSection.style.display = "none";
//         mapSection.style.display = "none";
//         aboutSection.style.display = "none";
//     }
// }

// function tabMapping(currTab) { //gives all tab elements responsive styling except for current tab
//     for(let i = 0; i < 5; i++) {
//         tabs[i].addEventListener("click", mouseClick());
//         tabs[i].addEventListener("mouseenter", mouseOn());
//         tabs[i].addEventListener("mouseleave", mouseOff());
//         if(i != currTab) {
//             console.log(i)
//             tabs[i].style.backgroundColor = secondaryColor;
//             // tabs[i].addEventListener("mouseenter", mouseOn(i));
//             // tabs[i].addEventListener("mouseleave", mouseOff(i));
//             // tabs[i].addEventListener("click", mouseClick(tabs[i]));
//             // tabs[i].style.backgroundColor = secondaryColor;
//             // tabs[i].addEventListener("mouseenter", function() {
//             //     tabs[i].style.backgroundColor = "white";
//             //     tabs[i].style.color = secondaryColor;
//             // })
//             // tabs[i].addEventListener("mouseleave", function() {
//             //     tabs[i].style.backgroundColor = secondaryColor;
//             //     tabs[i].style.color = "white";
//             // })
//         }
//         else {
            
//             // mouseClick(tabs[i]);
//             tabs[i].removeEventListener("mouseenter", mouseOn());
//             tabs[i].removeEventListener("mouseleave", mouseOff());
//             tabs[i].removeEventListener("click", mouseClick());
//             tabs[i].style.backgroundColor = primaryColor;
//         }
//     }
// };
function colorRes() {
    // footer.style.backgroundColor = primaryColor
    for(let j = 0; j < 5; j++) {
        tabs[j].style.backgroundColor = secondaryColor;
        tabs[j].style.color = "white";
    }
}


function tabMapping(currTab) { //gives all tab elements responsive styling except for current tab
    // colorRes()
    // tabs[0].style.backgroundColor = primaryColor;
    // tabs[currTab].style.backgroundColor = primaryColor;
    // console.log(tabs[currTab])
    // console.log("Yo")
    for(let i = 0; i < 5; i++) {
        tabs[i].addEventListener("mouseenter", function() {
            if(i != currTab) {
                tabs[i].style.backgroundColor = "white";
                tabs[i].style.color = secondaryColor;
            }
        });
        tabs[i].addEventListener("mouseleave", function(){
            if(i != currTab) {
                tabs[i].style.backgroundColor = secondaryColor;
                tabs[i].style.color = "white";
            }  
        });
        tabs[i].addEventListener("click", function() {
            shownTab = tabs[i];
            if(shownTab == homeTab) {
                // console.log("homeTab")
                // console.log(test)
                shownTab.style.backgroundColor = primaryColor;
                homeSection.style.display = "";
                roomsSection.style.display = "none";
                activitiesSection.style.display = "none";
                mapSection.style.display = "none";
                aboutSection.style.display = "none";
                currTab = 0;
                tabs[i].style.color = "white";
                colorRes()
                tabs[i].style.backgroundColor = primaryColor;
                tabs[i].style.color = "white";
            }
            else if(shownTab == roomsTab) {
                // console.log("this is wrong")
                shownTab.style.backgroundColor = primaryColor;
                homeSection.style.display = "none";
                roomsSection.style.display = "";
                activitiesSection.style.display = "none";
                mapSection.style.display = "none";
                aboutSection.style.display = "none";
                currTab = 1;
                colorRes()
                tabs[i].style.backgroundColor = primaryColor;
            }
            else if(shownTab == activitiesTab) {
                // console.log("this is worse")
                shownTab.style.backgroundColor = primaryColor;
                homeSection.style.display = "none";
                roomsSection.style.display = "none";
                activitiesSection.style.display = "";
                mapSection.style.display = "none";
                aboutSection.style.display = "none";
                currTab = 2;
                colorRes()
                tabs[i].style.backgroundColor = primaryColor;
                tabs[i].style.color = "white";
            }
            else if(shownTab == mapTab) {
                shownTab.style.backgroundColor = primaryColor;
                homeSection.style.display = "none";
                roomsSection.style.display = "none";
                activitiesSection.style.display = "none";
                mapSection.style.display = "";
                aboutSection.style.display = "none";
                currTab = 3;
                colorRes()
                tabs[i].style.backgroundColor = primaryColor;
                tabs[i].style.color = "white";
            }
            else if(shownTab == aboutTab) {
                shownTab.style.backgroundColor = primaryColor;
                homeSection.style.display = "none";
                roomsSection.style.display = "none";
                activitiesSection.style.display = "none";
                mapSection.style.display = "none";
                aboutSection.style.display = "";
                currTab = 4;
                colorRes()
                tabs[i].style.backgroundColor = primaryColor;
                tabs[i].style.color = "white";
            }
                // tabMapping(currTab)
                // return 0
        });

    }  // colorRes()
            // tabs[i].style.backgroundColor = secondaryColor;
            // tabs[i].addEventListener("mouseenter", function() {
            //     tabs[i].style.backgroundColor = "white";
            //     tabs[i].style.color = secondaryColor;
            // })
            // tabs[i].addEventListener("mouseleave", function() {
            //     tabs[i].style.backgroundColor = secondaryColor;
            //     tabs[i].style.color = "white";
            // })
        // tabs[currTab].style.backgroundColor = primaryColor;
        // else {
            
            // mouseClick(tabs[i]);
            // tabs[i].removeEventListener("mouseenter", mouseOn());
            // tabs[i].removeEventListener("mouseleave", mouseOff());
            // tabs[i].removeEventListener("click", mouseClick());
            // tabs[i].style.backgroundColor = primaryColor;
        // }
    // }
    // tabs[currTab].style.backgroundColor = primaryColor;
    // console.log(currTab)
};



if(styleTag.getAttribute("href") == "style.css") {
    primaryColor = "#4E96EA";
    // tabStyle()
}

if(styleTag.getAttribute("href") == "styleOverride.css") {
    primaryColor = "#34373B";
}




// homeTab.style.backgroundColor = primaryColor;
// currTab = 0;
// // homeTab.addEventListener("click", mouseClick(homeTab))
tabMapping(currTab);
// homeTab.style.backgroundColor = primaryColor;



// homeTab.addEventListener


// if(window.location.pathname == "/") { //This is to declare the default tab upon navigation
//     window.location.pathname = "/index.html"
// }

// function tabStyle() {    
//     if(window.location.pathname == "/index.html") { //home tab
//         homeTab.style.backgroundColor = primaryColor;
//         roomsTab.setAttribute("href", "rooms.html");
//         activitiesTab.setAttribute("href", "activities.html");
//         mapTab.setAttribute("href", "map.html");
//         aboutTab.setAttribute("href", "about.html");
//         coverPhoto.setAttribute("src", currCover)
//         tabMapping(0);
//     }
//     if(window.location.pathname == "/rooms.html") {//rooms tab
//         roomsTab.style.backgroundColor = primaryColor;
//         homeTab.setAttribute("href", "index.html");
//         activitiesTab.setAttribute("href", "activities.html");
//         mapTab.setAttribute("href", "map.html");
//         aboutTab.setAttribute("href", "about.html");
//         tabMapping(1);

//         let king = document.getElementById("king");
//         let queen = document.getElementById("queen");
//         king.addEventListener("click", function(){
//             king.innerHTML = "All done!"
//         })
//         queen.addEventListener("click", function(){
//             queen.innerHTML = "All done!"
//         })
//     }
//     if(window.location.pathname == "/activities.html") {//activites tab
//         console.log("activity page")
//         activitiesTab.style.backgroundColor = primaryColor;
//         homeTab.setAttribute("href", "index.html");
//         roomsTab.setAttribute("href", "rooms.html");
//         mapTab.setAttribute("href", "map.html");
//         aboutTab.setAttribute("href", "about.html");
//         tabMapping(2);
//     }
//     if(window.location.pathname == "/map.html") {//map tab
//         mapTab.style.backgroundColor = primaryColor;
//         roomsTab.setAttribute("href", "rooms.html");
//         activitiesTab.setAttribute("href", "activities.html");
//         homeTab.setAttribute("href", "index.html");
//         aboutTab.setAttribute("href", "about.html");
//         tabMapping(3);
//     }
//     if(window.location.pathname == "/about.html") {//about tab
//         aboutTab.style.backgroundColor = primaryColor;
//         roomsTab.setAttribute("href", "rooms.html");
//         activitiesTab.setAttribute("href", "activities.html");
//         homeTab.setAttribute("href", "index.html");
//         mapTab.setAttribute("href", "map.html");
//         tabMapping(4);
//     }
// }