/* 
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound */

const lengthEl = document.querySelector("#length-conversion");
const volumeEl = document.querySelector("#volume-conversion");
const massEl = document.querySelector("#mass-conversion");
const btnEl = document.querySelector("#btn-convert");
const inputNum = document.querySelector("#input-number");

inputNum.addEventListener("input", () => {
  if (inputNum.value === "00") {
    inputNum.value = 0;
  }
  if (inputNum.value.length === 2 && inputNum.value[0] === ".") {
    inputNum.value = "0" + inputNum.value;
  }

  let newInput = "";

  for (let i = 0; i < inputNum.value.length; i++) {
    if (inputNum.value[i] !== ".") {
      newInput += inputNum.value[i];
    }
  }

  if (newInput.length > 3) {
    inputNum.value = inputNum.value.slice(0, -1);
  }
});

btnEl.addEventListener("click", () => {
  render(inputNum.value);
});

function render(num) {
  const meterToFeet = (num * 3.281).toFixed(3);
  const feetToMeter = (num / 3.281).toFixed(3);
  const litersToGallons = (num * 0.264).toFixed(3);
  const gallonsToLiters = (num / 0.264).toFixed(3);
  const kilogramsToPounds = (num * 2.204).toFixed(3);
  const poundsToKilograms = (num / 2.204).toFixed(3);

  lengthEl.textContent = `${num} meters = ${meterToFeet} feet | ${num} feet = ${feetToMeter} meters`;
  volumeEl.textContent = `${num} liters = ${litersToGallons} gallons | ${num} gallons = ${gallonsToLiters} liters`;
  massEl.textContent = `${num} kilos = ${kilogramsToPounds} pounds | ${num} pounds = ${poundsToKilograms} kilos`;

  inputNum.focus();
  inputNum.select();
}

render(inputNum.value);
