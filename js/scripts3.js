window.onload= function (){
// Creating a function expression to select elements
const selectElement = (s) => document.querySelector(s);


// This opens the menu when clicked
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav__list').classList.add('active');
});

// This closes the menu when clicked
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav__list').classList.remove('active');
});
}