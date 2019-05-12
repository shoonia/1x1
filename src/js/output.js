import { id } from './util';

var outputImage = id('outputImage');
var outputDataURL = id('outputDataURL');
var outputBase64 = id('outputBase64');
var outputCSS = id('outputCSS');
var outputBytes = id('outputBytes');
var download = id('download');
var reader = new FileReader();

function clipboard(event) {
  event.target.select();
  document.execCommand('copy');
}

function createDataURL(color, cb) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  canvas.width = 1;
  canvas.height = 1;

  ctx.rect(0, 0, 1, 1);
  ctx.fillStyle = color;
  ctx.fill();

  canvas.toBlob(cb);

  return canvas.toDataURL('image/png');;
}

[
  outputDataURL,
  outputCSS,
  outputBase64,
  outputBytes
].forEach(function (input) {
  input.addEventListener('click', clipboard);
});

reader.addEventListener('load', function () {
  var bytes = new Uint8Array(reader.result);
  outputBytes.value = bytes.toString();
});

export default function (hex8) {
  var color = '#' + hex8;

  var dataURL = createDataURL(color, function (blob) {
    reader.readAsArrayBuffer(blob);
  });

  outputImage.style.backgroundColor = color;
  outputImage.title = '8 Digit Hex: ' + color;
  outputDataURL.value = dataURL;
  outputCSS.value = 'background-image: url(' + dataURL + ');';
  outputBase64.value = dataURL.slice(22);
  download.href = dataURL;
  download.download = '1x1' + color + '.png';
}
