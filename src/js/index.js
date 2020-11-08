import { ga } from './ga';
import { colors, createOptionList } from './colors';
import { connect, dispatch } from './store';
import { createCanvas, id, unique16, rgbToHex, clipboard } from './util';

const inputColor = id('inputColor');
const picker = id('picker');
const rangeRed = id('rangeRed');
const numberRed = id('numberRed');
const rangeGreen = id('rangeGreen');
const numberGreen = id('numberGreen');
const rangeBlue = id('rangeBlue');
const numberBlue = id('numberBlue');
const rangeAlpha = id('rangeAlpha');
const numberAlpha = id('numberAlpha');
const outputImage = id('outputImage');
const outputDataURL = id('outputDataURL');
const outputBase64 = id('outputBase64');
const outputCSS = id('outputCSS');
const outputBytes = id('outputBytes');
const download = id('download');

const reader = new FileReader();

const NOT_ALPHANUMERIC = /[^\da-z]/i;
const NOT_HEXADECIMAL = /[^\da-f]/i;

const setHex = (hex) => dispatch('hex', hex);

const setRGBA = (key) => (event) => {
  dispatch('rgba', [key, parseInt(event.target.value, 10)]);
};

const readAsArrayBuffer = (blob) => {
  if (reader.readyState !== 1) {
    reader.readAsArrayBuffer(blob);
  }
};

connect('hex', ({ hex, A }) => {
  const hex6 = '#' + hex;
  const hex8 = hex6 + rgbToHex(A);

  const canvas = createCanvas(hex8);
  const dataURL = canvas.toDataURL('image/png');
  const url = `url(${dataURL})`;

  canvas.toBlob(readAsArrayBuffer);
  inputColor.value = hex;
  picker.value = hex6;
  outputImage.style.backgroundImage = url;
  outputImage.title = `8 Digit Hex: ${hex8}`;
  outputDataURL.value = dataURL;
  outputCSS.value = `background-image: ${url};`;
  outputBase64.value = dataURL.slice(22);
  download.href = dataURL;
  download.download = `1x1_${hex8}.png`;
});

connect('R', ({ R }) => {
  rangeRed.value = R;
  numberRed.value = R;
});

connect('G', ({ G }) => {
  rangeGreen.value = G;
  numberGreen.value = G;
});

connect('B', ({ B }) => {
  rangeBlue.value = B;
  numberBlue.value = B;
});

connect('A', ({ A }) => {
  rangeAlpha.value = A;
  numberAlpha.value = A;
});

inputColor.addEventListener('change', () => {
  let color = inputColor.value
    .trim()
    .toLowerCase()
    .replace(NOT_ALPHANUMERIC, '');

  if (color in colors) {
    color = colors[color];
  }

  if (NOT_HEXADECIMAL.test(color)) {
    return inputColor.focus();
  }

  if (color.length === 3) {
    color += color;
  }

  if (color.length !== 6) {
    return inputColor.focus();
  }

  setHex(color);
});

picker.addEventListener('change', () => {
  setHex(picker.value.slice(1));
});

reader.addEventListener('load', () => {
  const bytes = new Uint8Array(reader.result);
  outputBytes.value = bytes.toString();
});

rangeRed.addEventListener('change', setRGBA('R'));
numberRed.addEventListener('change', setRGBA('R'));

rangeGreen.addEventListener('change', setRGBA('G'));
numberGreen.addEventListener('change', setRGBA('G'));

rangeBlue.addEventListener('change', setRGBA('B'));
numberBlue.addEventListener('change', setRGBA('B'));

rangeAlpha.addEventListener('change', setRGBA('A'));
numberAlpha.addEventListener('change', setRGBA('A'));

document.querySelectorAll('[data-clipboard]').forEach((i) => {
  i.addEventListener('click', clipboard);
});

if (document.location.hostname !== 'localhost') {
  ga();
}

id('rgbaDetails').open = window.innerWidth > 701;
id('colorList').appendChild(createOptionList());

id('random').addEventListener('click', () => {
  setHex(unique16(6));
});

setHex(unique16(6));
