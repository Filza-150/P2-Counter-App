function circle() {
    let circle1 = document.getElementById("toggleCircle");
    let container1 = document.getElementById("container");
    let themeToggle = document.getElementById("theme-toggle");
    circle1.classList.toggle("circle-right");
    // circle1.style.left = "50px"
    container1.classList.toggle("dark");
    themeToggle.classList.toggle("btn-dark")

}
