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

function getDataUrl() {
  var hax = inputColor.value;
  var alpha = rgbToHex(rangeAlpha.value);

  fetchData(hax + alpha).then(toOutputData);
}

function changeHaxInput() {
  var color = inputColor.value.replace(/[^0-9a-z]/gi, '');

  if (colors[color]) {
    color = colors[color];
  }

  if (color.length === 3) {
    color += color;
  }

  if (inputColor.value !== color) {
    inputColor.value = color;
  }

  if (color.length !== 6) {
    return;
  }

  var r = parseInt(color.slice(0, 2), 16);
  var g = parseInt(color.slice(2, 4), 16);
  var b = parseInt(color.slice(4), 16);

  rangeRed.value = r;
  numberRed.value = r;
  rangeGreen.value = g;
  numberGreen.value = g;
  rangeBlue.value = b;
  numberBlue.value = b;
}

function changeRGBAInput() {
  var r = rgbToHex(rangeRed.value);
  var g = rgbToHex(rangeGreen.value);
  var b = rgbToHex(rangeBlue.value);

  inputColor.value = r + g + b;
}

inputColor.addEventListener('change', changeHaxInput);

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
  button.addEventListener('click', getDataUrl);
});

bindInputs(rangeRed, numberRed);
bindInputs(rangeGreen, numberGreen);
bindInputs(rangeBlue, numberBlue);
bindInputs(rangeAlpha, numberAlpha);

changeHaxInput();
getDataUrl();
