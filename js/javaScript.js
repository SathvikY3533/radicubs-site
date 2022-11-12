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

const homeLink = document.getElementById('home');
const homeCode = document.getElementById('homePage');

const sponsorsLink = document.getElementById('sponsor');

// always checking if the element is clicked, if so, do alert('hello')
homeLink.addEventListener("click", () => {
    homeCode.style.visibility = "visible"
});


