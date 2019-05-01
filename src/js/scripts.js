import { getById, rgbToHex, bindInputs } from './util';
import toOutputData from './output';
import colors from './colors';
import { fetchData } from './api';

var inputColor = getById('inputColor');
var rangeRed = getById('rangeRed');
var numberRed = getById('numberRed');
var rangeGreen = getById('rangeGreen');
var numberGreen = getById('numberGreen');
var rangeBlue = getById('rangeBlue');
var numberBlue = getById('numberBlue');
var rangeAlpha = getById('rangeAlpha');
var numberAlpha = getById('numberAlpha');
var buttonsCreate = document.querySelectorAll('.buttonsCreate');

var NOT_ALPHANUMERIC = /[^0-9a-z]/gi;
var NOT_HEXADECIMAL = /[^0-9a-f]/gi;

function getDataUrl(hex8) {
  fetchData(hex8).then(toOutputData);
}

function createHex8() {
  var color = inputColor.value
    .trim()
    .toLowerCase()
    .replace(NOT_ALPHANUMERIC, '')

  if (colors[color]) {
    color = colors[color];
  }

  if (NOT_HEXADECIMAL.test(color)) {
    inputColor.focus();
    return '';
  }

  if (3 === color.length) {
    color += color;
  }

  if (6 !== color.length) {
    inputColor.focus();
    return '';
  }

  if (inputColor.value !== color) {
    inputColor.value = color;
  }

  rangeRed.value = numberRed.value = parseInt(color.slice(0, 2), 16);
  rangeGreen.value = numberGreen.value = parseInt(color.slice(2, 4), 16);
  rangeBlue.value = numberBlue.value = parseInt(color.slice(4), 16);

  return color + rgbToHex(rangeAlpha.value);
}

function createImage() {
  var hex = createHex8();

  if (hex) {
    getDataUrl(hex);
  }
}

function changeRGBAInput() {
  var r = rgbToHex(rangeRed.value);
  var g = rgbToHex(rangeGreen.value);
  var b = rgbToHex(rangeBlue.value);

  inputColor.value = r + g + b;
}

inputColor.addEventListener('change', createHex8);

inputColor.addEventListener('keypress', function (event) {
  if (13 === event.keyCode) {
    createImage();
  }
});

[
  rangeRed,
  numberRed,
  rangeGreen,
  numberGreen,
  rangeBlue,
  numberBlue,
].forEach(function (input) {
  input.addEventListener('change', changeRGBAInput);
});

[].forEach.call(buttonsCreate, function (button) {
  button.addEventListener('click', createImage);
});

bindInputs(rangeRed, numberRed);
bindInputs(rangeGreen, numberGreen);
bindInputs(rangeBlue, numberBlue);
bindInputs(rangeAlpha, numberAlpha);
createImage();
