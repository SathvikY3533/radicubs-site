//Search Bar Stuff ---------
// var search = document.getElementById("search");

// search.addEventListener("keypress", function(event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     alert("You searched: " + search.value);
//   }
// });
//Search Bar Stuff ---------

const nav = document.getElementById("NavBar");
const navList = document.querySelectorAll('.nav');
const nav2 = document.getElementsByClassName('tabs');
const navButton = document.getElementById('navButton');
const mobileNav = document.getElementById('mobileNav');

const homeLink = document.getElementById('home');
const homeLink2 = document.getElementById('home2');
const homeCode = document.getElementById('homePage');

const sponsorsLink = document.getElementById('sponsors');
const sponsorsLink2 = document.getElementById('sponsors2');
const sponsorsCode = document.getElementById('sponsorsPage');

const teamLink = document.getElementById('team');
const teamLink2 = document.getElementById('team2');
const teamCode = document.getElementById('teamPage');

const contactUsLink = document.getElementById('contact');
const contactUsLink2 = document.getElementById('contact2');
const contactUsCode = document.getElementById('contactUsPage');


homeLink.addEventListener("click", () => {
    homeCode.style.display = "block";
    sponsorsCode.style.display = "none";
    contactUsCode.style.display = "none";
    teamCode.style.display = "none";
    setNavColor("black");
});
homeLink2.addEventListener("click", () => {
    homeCode.style.display = "block";
    sponsorsCode.style.display = "none";
    contactUsCode.style.display = "none";
    teamCode.style.display = "none";
    setNavColor("black");
});


sponsorsLink.addEventListener("click", () => {
    homeCode.style.display = "none";
    sponsorsCode.style.display = "block";
    contactUsCode.style.display = "none";
    teamCode.style.display = "none";
    setNavColor("white");
});
sponsorsLink2.addEventListener("click", () => {
    homeCode.style.display = "none";
    sponsorsCode.style.display = "block";
    contactUsCode.style.display = "none";
    teamCode.style.display = "none";
    setNavColor("white");
});


contactUsLink.addEventListener("click", () => {
    homeCode.style.display = "none";
    sponsorsCode.style.display = "none";
    contactUsCode.style.display = "block";
    teamCode.style.display = "none";
    setNavColor("white");
});
contactUsLink2.addEventListener("click", () => {
    homeCode.style.display = "none";
    sponsorsCode.style.display = "none";
    contactUsCode.style.display = "block";
    teamCode.style.display = "none";
    setNavColor("white");
});


teamLink.addEventListener("click", () => {
    homeCode.style.display = "none";
    sponsorsCode.style.display = "none";
    contactUsCode.style.display = "none";
    teamCode.style.display = "block";
    setNavColor("white");
});
teamLink2.addEventListener("click", () => {
    homeCode.style.display = "none";
    sponsorsCode.style.display = "none";
    contactUsCode.style.display = "none";
    teamCode.style.display = "block";
    setNavColor("white");
});


window.addEventListener('resize', () => {
    if(window.innerWidth <= 1190) {
        navButton.style.display = "none";
        mobileNav.style.display = "block";
    } else {
        navButton.style.display = "block";
        mobileNav.style.display = "none";
    }
});

// ----------Nav Funtions ******8------------------------------------------------------------------------------------------

function navBarSwitch(x) {
    x.classList.toggle("change");
}

function openNav() {
    document.getElementById("myNav").style.width = "45vw";
    navList.forEach(navList => {
        navList.style.opacity = '100%';
        navList.style.transition = '.6s';
        navList.style.fontSize = '1.25vw';
    });
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    navList.forEach(navList => {
        navList.style.opacity = '0%';
        navList.style.transition = '.4s';
        navList.style.fontSize = '0vw';
    });
}

// ----------------------------------------------------------------------------------------------------



// ------------Contact Us Form Function *****8----------------------------------------------------------------------------------------

function lineHighlight(x) {
    x.style.border = "none";
    x.style.transition = "none";
    x.style.borderBottom = "solid 2px rgb(0,199,0)";
}

function lineNormal(x) {
    x.style.borderBottom = "solid 2px white";
    x.style.transition = "initial";
}

// ----------------------------------------------------------------------------------------------------\

function setNavColor(s) {
    for (let i = 0; i < nav2.length; i++) {
        nav2[i].style.color = s;
        nav2[i].style.textShadow = "-3px 2px 10px #cccccc";
    }
}

if(window.innerWidth <= 1190) {
    navButton.style.display = "none";
    mobileNav.style.display = "block";
} else {
    navButton.style.display = "block";
    mobileNav.style.display = "none";
}