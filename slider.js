const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");
let slideNumber = 1;

const length = images.length;

for (i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";
const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 1200}px)`;
    slideNumber = i + 1;
    buttons[i].style.backgroundColor = "white";
  });
});

const nextSlide = () => {
  slider.style.transform = `translate(-${slideNumber * 1200}px)`;
  slideNumber++;
};
const prevSlide = () => {
  slider.style.transform = `translate(-${(slideNumber - 2) * 1200}px)`;
  slideNumber--;
  // console.log("mangrio");
};
const getFirstSlide = () => {
  slider.style.transform = `translate(0px)`;
  slideNumber = 1;
};
const getlastSlide = () => {
  slider.style.transform = `translate(-${(length - 1) * 1200}px)`;
  slideNumber = length;
};

rightArrow.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
});
leftArrow.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getlastSlide();
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
});
