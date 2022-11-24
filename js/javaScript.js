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

    // nav.style.display = "block";
    // nav.style = "margin: 0 28vw; margin-top: 2.5vw; text-align: center; text-color: white;";
});

contactUsLink.addEventListener("click", () => {
    homeCode.style.display = "none";
    sponsorsCode.style.display = "none";
    contactUsCode.style.display = "block";

    // nav.style.display = "block";
    // nav.style = "margin: 0 28vw; margin-top: 2.5vw; text-align: center; color: white;";
});




function navBarSwitch(x) {
    x.classList.toggle("change");
}

function openNav() {
    document.getElementById("myNav").style.width = "45vw";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


