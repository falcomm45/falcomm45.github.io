"use strict";
const images = [];

for (let i = 0; i < 15; i++) {
  images.push(`background(${i + 1}).jpg`);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");

background.src = `images/${chosenImage}`;

document.body.prepend(background);
