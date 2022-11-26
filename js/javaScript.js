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

const homeLink = document.getElementById('home');
const homeCode = document.getElementById('homePage');

const sponsorsLink = document.getElementById('sponsors');
const sponsorsCode = document.getElementById('sponsorsPage');

const teamLink = document.getElementById('team');
const teamCode = document.getElementById('teamPage');

const contactUsLink = document.getElementById('contact');
const contactUsCode = document.getElementById('contactUsPage');


homeLink.addEventListener("click", () => {
    homeCode.style.display = "block";
    sponsorsCode.style.display = "none";
    contactUsCode.style.display = "none";

    // nav.style.display = "block";
});

sponsorsLink.addEventListener("click", () => {
    homeCode.style.display = "none";
    sponsorsCode.style.display = "block";
    contactUsCode.style.display = "none";
});

contactUsLink.addEventListener("click", () => {
    homeCode.style.display = "none";
    sponsorsCode.style.display = "none";
    contactUsCode.style.display = "block";
});

// ----------------------------------------------------------------------------------------------------

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
        navList.style.transition = '.3s';
        navList.style.fontSize = '0vw';
    });
}


