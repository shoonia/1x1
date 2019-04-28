import { getById } from './util';

var outputImage = getById('outputImage');
var outputDataURL = getById('outputDataURL');
var outputBase64 = getById('outputBase64');
var outputBuffer = getById('outputBuffer');

function clipboard(event) {
  event.target.select();
  document.execCommand('copy');
}

function createBlobURL(array) {
  var byteArray = new Uint8Array(array);
  var blob = new Blob([byteArray], { type: 'image/png' });

  return URL.createObjectURL(blob);
}

outputDataURL.addEventListener('click', clipboard);
outputBase64.addEventListener('click', clipboard);
outputBuffer.addEventListener('click', clipboard);

export default function (data) {
  if (data.error) {
    return;
  }

  outputImage.style.backgroundImage = 'url(' + createBlobURL(data.buffer) + ')';
  outputDataURL.value = 'data:image/png;base64,' + data.title;
  outputBase64.value = data.title;
  outputBuffer.value = JSON.stringify(data.buffer);
}
