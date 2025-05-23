const navLinks = document.querySelectorAll(".nav-menu .nav-links");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle Mobile Menu
    document.body.classList.toggle("show-mobile-menu")
})

    // Close Menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());

    // Close Menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});