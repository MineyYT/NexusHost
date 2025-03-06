let clickMe = document.getElementById("clickme");
let hiddenText = document.getElementById("hiddentext");

clickMe.addEventListener('click', () => {
    hiddenText.style.display == "none" ? hiddenText.style.display = "block" : hiddenText.style.display = "none";
});
