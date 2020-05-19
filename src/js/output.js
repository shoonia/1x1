import { id } from './util';

const outputImage = id('outputImage');
const outputDataURL = id('outputDataURL');
const outputBase64 = id('outputBase64');
const outputCSS = id('outputCSS');
const outputBytes = id('outputBytes');
const download = id('download');
const reader = new FileReader();

function clipboard(event) {
  event.target.select();
  document.execCommand('copy');
}

function createCanvas(color) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 1;
  canvas.height = 1;

  ctx.rect(0, 0, 1, 1);
  ctx.fillStyle = color;
  ctx.fill();

  return canvas;
}

[
  outputDataURL,
  outputCSS,
  outputBase64,
  outputBytes
].forEach((input) => {
  input.addEventListener('click', clipboard);
});

reader.addEventListener('load', () => {
  const bytes = new Uint8Array(reader.result);
  outputBytes.value = bytes.toString();
});

export default function (hex8) {
  const color = '#' + hex8;
  const canvas = createCanvas(color);
  const dataURL = canvas.toDataURL('image/png');
  const url = 'url(' + dataURL + ')';

  canvas.toBlob((blob) => {
    if (reader.readyState !== 1) {
      reader.readAsArrayBuffer(blob);
    }
  });

  outputImage.style.backgroundImage = url;
  outputImage.title = '8 Digit Hex: ' + color;
  outputDataURL.value = dataURL;
  outputCSS.value = 'background-image: ' + url + ';';
  outputBase64.value = dataURL.slice(22);
  download.href = dataURL;
  download.download = '1x1_' + color + '.png';
}
