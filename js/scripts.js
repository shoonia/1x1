function getById(id) {
  return document.getElementById(id);
}

var inputColor = getById('inputColor');
var inputAlpha = getById('inputAlpha');
var buttonCreate = getById('buttonCreate');
var outputImage = getById('outputImage');

function fetchDataUrl(color, alpha) {
  return fetch('https://shoonia.wixsite.com/1x1-pixel/_functions/create/' + color + '/' + alpha)
    .then(function (response) {
      return response.json();
    });
}

function createBlob(data) {
  var byteArray = new Uint8Array(data.buffer);
  var blob = new Blob([byteArray], { type: 'image/png' });
  var url = URL.createObjectURL(blob);

  return 'url(' + url + ')';
}

function getDataUrl() {
  var color = inputColor.value.replace(/[^0-9a-z]/gi, '');
  var alpha = inputAlpha.value;

  fetchDataUrl(color, alpha)
    .then(function (data) {
      outputImage.style.backgroundImage = createBlob(data);
    });
}

buttonCreate.addEventListener('click', getDataUrl);
