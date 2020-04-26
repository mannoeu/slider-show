let time = 4100;
let index = 0;
let img = document.querySelectorAll("#slider img");
let lastIndex = img.length;
let active = true;

let nextButton = document.querySelector("#next");
let stopButton = document.querySelector("#stop");
let prevButton = document.querySelector("#prev");

function stopSlider() {
  if (active) {
    active = false;
    stopButton.innerHTML = "Play";
  } else {
    active = true;
    stopButton.innerHTML = "Pause";
  }
}

function changeImg() {
  if (active === true) {
    img[index].classList.remove("selected");
    index++;
    index >= lastIndex && (index = 0);
    img[index].classList.add("selected");
  }
}

function prevImg() {
  if (active) {
    stopSlider();
  }
  if (index <= lastIndex) {
    img[index].classList.remove("selected");
    index <= 0 && (index = lastIndex);
    index--;
    img[index].classList.add("selected");
  }
}

function nextImg() {
  if (active) {
    stopSlider();
  }
  if (index <= lastIndex) {
    img[index].classList.remove("selected");
    index++;
    index >= lastIndex && (index = 0);
    img[index].classList.add("selected");
  }
}

function startSlider() {
  setInterval(() => {
    changeImg();
  }, time);
}

stopButton.addEventListener("click", stopSlider);
prevButton.addEventListener("click", prevImg);
nextButton.addEventListener("click", nextImg);

window.addEventListener("load", startSlider);
