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

const nav = document.getElementById("commonNav");

const homeLink = document.getElementById('home');
const homeCode = document.getElementById('homePage');

const sponsorsLink = document.getElementById('sponsors');
const sponsorsCode = document.getElementById('sponsorsPage');

const teamLink = document.getElementById('team');
const teamCode = document.getElementById('teamPage');


homeLink.addEventListener("click", () => {
    homeCode.style.display = "block";
    sponsorsCode.style.display = "none";
    nav.style.display = "none";
});

sponsorsLink.addEventListener("click", () => {
    homeCode.style.display = "none";
    sponsorsCode.style.display = "block";
    nav.style.display = "block";
});


