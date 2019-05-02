import { getById } from './util';

var outputImage = getById('outputImage');
var outputDataURL = getById('outputDataURL');
var outputBase64 = getById('outputBase64');
var download = getById('download');

function clipboard(event) {
  event.target.select();
  document.execCommand('copy');
}

function setBackground(blob) {
  var url = URL.createObjectURL(blob);
  outputImage.style.backgroundImage = 'url(' + url + ')';
}

function createCanvas(hex8) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  canvas.width = 1;
  canvas.height = 1;

  ctx.rect(0, 0, 1, 1);
  ctx.fillStyle = '#' + hex8;
  ctx.fill();

  return canvas;
}

outputDataURL.addEventListener('click', clipboard);
outputBase64.addEventListener('click', clipboard);

export default function (hex8) {
  var canvas = createCanvas(hex8);
  var dataURL = canvas.toDataURL('image/png');

  canvas.toBlob(setBackground);

  outputDataURL.value = dataURL;
  outputBase64.value = dataURL.slice(22);
  download.href = dataURL;
  download.download = '1x1#' + hex8 + '.png';
}
