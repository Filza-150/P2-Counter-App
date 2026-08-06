function circle() {
  let circle1 = document.getElementById("toggleCircle");
  let container1 = document.getElementById("container");
  let themeToggle = document.getElementById("theme-toggle");
  let increaseNumbers = document.getElementById("change-numbers");
  circle1.classList.toggle("circle-right");
  // circle1.style.left = "50px"
  container1.classList.toggle("dark");
  themeToggle.classList.toggle("btn-dark");
  increaseNumbers.classList.toggle("number-mode")


}

let count = 0
let increaseNumbers = document.getElementById("change-numbers");

function plusBtn() {
    count++;
  increaseNumbers.innerHTML = count;
increaseNumbers.style.color = "#71a1ff"
//   if (count === 101) {
//     count = 100
//     increaseNumbers.innerHTML = count;
//   } 
}

function minusBtn() {
    count--;
    increaseNumbers.innerHTML = count;
    if (count > 0) {
        increaseNumbers.style.color = "green"
        
    }
    if (count === -1) {
    count = 0
    increaseNumbers.innerHTML = count;
    // let arrow1 = document.getElementById("arrow");
    // arrow1.style.visibility = "hidden"
  }
}

function resetBtn() {
    count = 0;
    increaseNumbers.innerHTML = count;
    increaseNumbers.style.color = "black"
    
}