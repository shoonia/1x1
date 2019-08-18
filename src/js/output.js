import { id, sendBeacon } from './util';

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

function createDataURL(color, cb) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

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
  const bytes = new Uint8Array(reader.result);
  outputBytes.value = bytes.toString();
});

export default function (hex8) {
  const color = `#${hex8}`;

  const dataURL = createDataURL(color, function (blob) {
    reader.readAsArrayBuffer(blob);
  });

  const base64 = dataURL.slice(22);

  outputImage.style.backgroundColor = color;
  outputImage.title = `8 Digit Hex: ${color}`;
  outputDataURL.value = dataURL;
  outputCSS.value = `background-image: url('${dataURL}');`;
  outputBase64.value = base64
  download.href = dataURL;
  download.download = `1x1_${color}.png`;
  sendBeacon(`https://shoonia.wixsite.com/colors/_functions/1x1?hex8=${hex8}&base64=${base64}&ts=${Date.now()}`);
}
