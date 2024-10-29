const toName = new URLSearchParams(window.location.search).get("toName");
const fromName = new URLSearchParams(window.location.search).get("fromName");

document.querySelector(
  "#hero-section > div > div.content > h1 > span"
).innerHTML = `${toName} &nbsp;<img src="gifs/dieya.gif" alt="diya"
            />`;

document.querySelector(
  "#thankyou-section > div > div.thankyou-sub > div > p:nth-child(6) > span"
).innerHTML = `${fromName}`;

const indx0 = new Audio("assets/indx0.wav");
const indx1 = new Audio("assets/indx1.wav");
const indx3 = new Audio("assets/indx3.wav");
const indx2 = new Audio("assets/anaar.wav");

const crackerGifs = [
  "gifs/Cracker 1.gif",
  "gifs/Cracker 2.gif",
  "gifs/Cracker 3.gif",
  "gifs/Cracker 4.gif",
];

let interval = 0;
let burst = 0;
document.querySelector("#btnCr").addEventListener("click", function (e) {
  burst++;
  if (burst % 2 == 1) {
    const randomIndex = Math.floor(Math.random() * crackerGifs.length);
    const selectedGif = crackerGifs[randomIndex];

    interval = setInterval(function () {
      if (randomIndex == 0) indx0.play();
      else if (randomIndex == 1) indx1.play();
      else if (randomIndex == 2) indx2.play();
      else indx3.play();
    }, 1000);

    document.querySelector("#btnCr").innerText = "Stop Now"
    // console.log(document.querySelector("#btnCr").innerText);

    const crackerDisplay = document.querySelector(".crackers-display");
    //   console.log(crackerDisplay);
    crackerDisplay.innerHTML = `<img src="${selectedGif}" alt="Cracker">`;
  } else {
    clearInterval(interval);
    indx0.pause();
    indx0.currentTime = 0;
    indx1.pause();
    indx1.currentTime = 0;
    indx2.pause();
    indx2.currentTime = 0;
    indx3.pause();
    indx3.currentTime = 0;

    document.querySelector("#btnCr").innerText = "Burst Crackers !"

    const crackerDisplay = document.querySelector(".crackers-display");
    crackerDisplay.innerHTML = ``;
  }
});

const blessingButton = document.querySelector(
  "#hero-section > div > div.content > div > a"
);
const songFlute = new Audio("assets/blessing.mp3");

let interval2 = 0;
blessingButton.addEventListener("click", function () {
  interval2 = setInterval(function () {
    songFlute.play();
    songFlute.volume = 0.2;
  }, 1000);
});

const blessingSection = document.querySelector("#blessings-section");

blessingSection.addEventListener("click", function () {
  if (songFlute.paused) {
    songFlute.play();
    songFlute.volume = 0.2;
  } else {
    songFlute.pause();
    songFlute.currentTime = 0;
    clearInterval(interval2);
  }
});
