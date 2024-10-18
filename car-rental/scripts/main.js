"use strict";

const pickupInput = document.getElementById("pickupInput");
const numOfDaysInput = document.getElementById("numOfDaysInput");
const tollTagCheckbox = document.getElementById("tollTagCheckbox");
const gpsCheckbox = document.getElementById("gpsCheckbox");
const roadsideCheckbox = document.getElementById("roadsideCheckbox");
const overRadio = document.getElementById("overRadio");
const underRadio = document.getElementById("underRadio");
const estimateTotalButton = document.getElementById("estimateTotalButton");
const totalCostInput = document.getElementById("totalCostInput");
const totalDisplay = document.getElementById("totalDisplay");

let days = 0;
let options = 0;
let under = 0;
let carTotal = 0;

estimateTotalButton.addEventListener("click", () => {
  carTotal = 29.99 * Number(numOfDaysInput.value);

  if (tollTagCheckbox.checked) {
    options = 3.95 * Number(numOfDaysInput.value);
    console.log(options);
  }
  if (gpsCheckbox.checked) {
    options = 2.95 * Number(numOfDaysInput.value);
    console.log(options);
  }
  if (roadsideCheckbox.checked) {
    options = 3.95 * Number(numOfDaysInput.value);
    console.log(options);
  }
  if (underRadio.checked) {
    under = 0.3 * Number(numOfDaysInput.value);
    console.log(under);
  }

  console.log(carTotal);
});
