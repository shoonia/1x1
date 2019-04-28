import { getById } from './util';
import inputBind from './inputBind';
import toOutputData from './output';

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

function fetchDataUrl(color, alpha) {
  return fetch('https://shoonia.wixsite.com/1x1-pixel/_functions/create/' + color + '/' + alpha)
    .then(function (response) {
      return response.json();
    });
}

function getDataUrl() {
  var color = inputColor.value.replace(/[^0-9a-z]/gi, '');
  var alpha = numberAlpha.value;

  fetchDataUrl(color, alpha).then(toOutputData);
}

[].forEach.call(buttonsCreate, function (button) {
  button.addEventListener('click', getDataUrl);
});

inputBind(rangeRed, numberRed);
inputBind(rangeGreen, numberGreen);
inputBind(rangeBlue, numberBlue);
inputBind(rangeAlpha, numberAlpha);
