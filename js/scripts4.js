var dropdown = document.querySelector("nav .dropdown");

var button = document.querySelector("nav .menu");

function menu() {
  if (dropdown.style.display === "grid") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "grid";
  }
}
