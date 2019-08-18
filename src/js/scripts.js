import { id, rgbToHex, bindInputs, debounce } from './util';
import toOutputData from './output';
import colors from './colors';
import ga from './ga';

const inputColor = id('inputColor');
const rangeRed = id('rangeRed');
const numberRed = id('numberRed');
const rangeGreen = id('rangeGreen');
const numberGreen = id('numberGreen');
const rangeBlue = id('rangeBlue');
const numberBlue = id('numberBlue');
const rangeAlpha = id('rangeAlpha');
const numberAlpha = id('numberAlpha');
const picker = id('picker');
const buttonCreate = id('buttonCreate');

const NOT_ALPHANUMERIC = /[^\da-z]/i;
const NOT_HEXADECIMAL = /[^\da-f]/i;

function setRGB(color) {
  const int = parseInt(color, 16);

  rangeRed.value = numberRed.value = int >> 16 & 255;
  rangeGreen.value = numberGreen.value = int >> 8 & 255;
  rangeBlue.value = numberBlue.value = int & 255;
}

function changeColor() {
  let color = inputColor.value
    .trim()
    .toLowerCase()
    .replace(NOT_ALPHANUMERIC, '')

  if (colors[color]) {
    color = colors[color];
  }

  if (NOT_HEXADECIMAL.test(color)) {
    return inputColor.focus();
  }

  if (3 === color.length) {
    color += color;
  }

  if (6 !== color.length) {
    return inputColor.focus();
  }

  if (inputColor.value !== color) {
    inputColor.value = color;
  }

  picker.value = `#${color}`;

  setRGB(color);
  toOutputData(color + rgbToHex(rangeAlpha.value));
}

function changeRGBA() {
  const r = rgbToHex(rangeRed.value);
  const g = rgbToHex(rangeGreen.value);
  const b = rgbToHex(rangeBlue.value);
  const hex = r + g + b;

  inputColor.value = hex;
  picker.value = `#${hex}`;

  toOutputData(hex + rgbToHex(rangeAlpha.value));
}

function changePicker() {
  inputColor.value = picker.value.slice(1);
  changeColor();
}

const debounceChangeRGBA = debounce(changeRGBA, 100);
const debounceChangeColor = debounce(changeColor, 100);

[
  rangeRed,
  numberRed,
  rangeGreen,
  numberGreen,
  rangeBlue,
  numberBlue,
  rangeAlpha,
  numberAlpha
].forEach(function (input) {
  input.addEventListener('change', debounceChangeRGBA);
});

inputColor.addEventListener('change', debounceChangeColor);
buttonCreate.addEventListener('click', debounceChangeColor);
picker.addEventListener('change', changePicker);

bindInputs(rangeRed, numberRed);
bindInputs(rangeGreen, numberGreen);
bindInputs(rangeBlue, numberBlue);
bindInputs(rangeAlpha, numberAlpha);
changeColor();
ga();
