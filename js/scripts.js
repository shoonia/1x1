import inputBind from './inputBind';

function getById(id) {
  return document.getElementById(id);
}

var inputColor = getById('inputColor');

var rangeRed = getById('rangeRed');
var numberRed = getById('numberRed');

var rangeGreen = getById('rangeGreen');
var numberGreen = getById('numberGreen');

var rangeBlue = getById('rangeBlue');
var numberBlue = getById('numberBlue');

var rangeAlpha = getById('rangeAlpha');
var numberAlpha = getById('numberAlpha');

var outputImage = getById('outputImage');
var outputDataURL = getById('outputDataURL');
var outputBase64 = getById('outputBase64');
var outputBuffer = getById('outputBuffer');

var buttonsCreate = document.querySelectorAll('.buttonsCreate');

function fetchDataUrl(color, alpha) {
  return fetch('https://shoonia.wixsite.com/1x1-pixel/_functions/create/' + color + '/' + alpha)
    .then(function (response) {
      return response.json();
    });
}

function createBlobURL(array) {
  var byteArray = new Uint8Array(array);
  var blob = new Blob([byteArray], { type: 'image/png' });

  return URL.createObjectURL(blob);
}

function getDataUrl() {
  var color = inputColor.value.replace(/[^0-9a-z]/gi, '');
  var alpha = numberAlpha.value;

  fetchDataUrl(color, alpha)
    .then(function (data) {
      outputImage.style.backgroundImage = 'url(' + createBlobURL(data.buffer) + ')';
      outputDataURL.value = 'data:image/png;base64,' + data.title;
      outputBase64.value = data.title;
      outputBuffer.value = JSON.stringify(data.buffer);
    });
}

[].forEach.call(buttonsCreate, function (button) {
  button.addEventListener('click', getDataUrl);
});

inputBind(rangeRed, numberRed);
inputBind(rangeGreen, numberGreen);
inputBind(rangeBlue, numberBlue);
inputBind(rangeAlpha, numberAlpha);
