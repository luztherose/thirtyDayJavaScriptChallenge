const panels = document.querySelectorAll(".panel"); // A node List

function toggleOpen() {
    this.classList.toggle("open");
}
function toggleActive(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}
// Listen for a click in each of the panel
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
// Listen for when the event ends in each of the panel
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));