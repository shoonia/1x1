import { getById } from './util';

var outputImage = getById('outputImage');
var outputDataURL = getById('outputDataURL');
var outputBase64 = getById('outputBase64');
var download = getById('download');

function clipboard(event) {
  event.target.select();
  document.execCommand('copy');
}

function createDataURL(color) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  canvas.width = 1;
  canvas.height = 1;

  ctx.rect(0, 0, 1, 1);
  ctx.fillStyle = color;
  ctx.fill();

  return canvas.toDataURL('image/png');;
}

outputDataURL.addEventListener('click', clipboard);
outputBase64.addEventListener('click', clipboard);

export default function (hex8) {
  var color = '#' + hex8;
  var dataURL = createDataURL(color);

  outputDataURL.value = dataURL;
  outputBase64.value = dataURL.slice(22);
  outputImage.style.backgroundColor = color;
  download.href = dataURL;
  download.download = '1x1' + color + '.png';
}
