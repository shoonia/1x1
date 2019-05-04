import { id, rgbToHex, bindInputs, debounce } from './util';
import toOutputData from './output';
import colors from './colors';
import ga from './ga';

var inputColor = id('inputColor');
var rangeRed = id('rangeRed');
var numberRed = id('numberRed');
var rangeGreen = id('rangeGreen');
var numberGreen = id('numberGreen');
var rangeBlue = id('rangeBlue');
var numberBlue = id('numberBlue');
var rangeAlpha = id('rangeAlpha');
var numberAlpha = id('numberAlpha');
var buttonCreate = id('buttonCreate');

var NOT_ALPHANUMERIC = /[^0-9a-z]/gi;
var NOT_HEXADECIMAL = /[^0-9a-f]/gi;

function changeColor() {
  var color = inputColor.value
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

  rangeRed.value = numberRed.value = parseInt(color.slice(0, 2), 16);
  rangeGreen.value = numberGreen.value = parseInt(color.slice(2, 4), 16);
  rangeBlue.value = numberBlue.value = parseInt(color.slice(4), 16);

  toOutputData(color + rgbToHex(rangeAlpha.value));
}

function changeRGBA() {
  var r = rgbToHex(rangeRed.value);
  var g = rgbToHex(rangeGreen.value);
  var b = rgbToHex(rangeBlue.value);
  var a = rgbToHex(rangeAlpha.value);

  inputColor.value = r + g + b;

  toOutputData(r + g + b + a);
}

var debounceChangeRGBA = debounce(changeRGBA, 100);
var debounceChangeColor = debounce(changeColor, 100);

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

bindInputs(rangeRed, numberRed);
bindInputs(rangeGreen, numberGreen);
bindInputs(rangeBlue, numberBlue);
bindInputs(rangeAlpha, numberAlpha);
changeColor();
ga();
