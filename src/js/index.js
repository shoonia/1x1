import tinykeys from 'tinykeys';

import { ga } from './ga';
import { colors, createOptionList } from './colors';
import { connect, dispatch } from './store';
import { createCanvas, id, random16, decimalToHex, clipboard } from './util';

const inputColor = id('inputColor');
const inputAlpha = id('inputAlpha');
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

const fileReader = new FileReader();
const location = window.location;

const FF = 'ff';
const NOT_ALPHANUMERIC = /[^\da-z]/i;
const NOT_HEXADECIMAL = /[^\da-f]/i;

const setHex = (hex) => dispatch('hex', hex);

const setRGBA = ({ target }) => {
  return dispatch('rgba', [
    target.dataset.rgba,
    target.valueAsNumber,
  ]);
};

const setAlpha = (hex) => {
  return dispatch('rgba', ['A', parseInt(hex, 16)]);
};

const readAsArrayBuffer = (blob) => {
  if (fileReader.readyState !== 1) {
    fileReader.readAsArrayBuffer(blob);
  }
};

const parseHex = (value) => {
  let color = value
    .trim()
    .toLowerCase()
    .replace(NOT_ALPHANUMERIC, '');

  if (color in colors) {
    color = colors[color];
  }

  if (NOT_HEXADECIMAL.test(color)) {
    return [false];
  }

  if (color.length === 3) {
    color += color;
  }

  if (color.length === 6) {
    color += FF;
  }

  if (color.length !== 8) {
    return [false];
  }

  return [true, color];
};

connect('hex', ({ hex }) => {
  const hex6 = hex.slice(0, 6);
  const hex8 = '#' + hex;

  const canvas = createCanvas(hex8);
  const dataURL = canvas.toDataURL('image/png');

  const url = `url(${dataURL})`;
  const backgroundImage = `background-image: ${url};`;
  const css = `display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;${backgroundImage}`;

  console.log('%c  ', css, hex8);
  canvas.toBlob(readAsArrayBuffer);
  location.hash = hex8;

  inputColor.value = hex6;
  picker.value = '#' + hex6;
  outputImage.style.backgroundImage = url;
  outputImage.title = `8-Digit Hex: ${hex8}`;
  outputDataURL.value = dataURL;
  outputCSS.value = backgroundImage;
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
  inputAlpha.value = decimalToHex(A);
});

inputColor.addEventListener('change', () => {
  const [isValid, color] = parseHex(inputColor.value);

  if (isValid) {
    setHex(color);
  } else {
    inputColor.focus();
  }
});

inputAlpha.addEventListener('change', () => {
  const val = inputAlpha.value
    .trim()
    .toLowerCase()
    .replace(NOT_HEXADECIMAL, '');

  const hex = val.length !== 2 ? FF : val;

  setAlpha(hex);
});

picker.addEventListener('change', () => {
  setHex(picker.value.slice(1) + FF);
});

fileReader.addEventListener('load', () => {
  const bytes = new Uint8Array(fileReader.result);
  outputBytes.value = bytes.toString();
});

document.querySelectorAll('[data-rgba]').forEach((i) => {
  i.addEventListener('change', setRGBA);
});

document.querySelectorAll('[data-clipboard]').forEach((i) => {
  i.addEventListener('click', clipboard);
});

if (document.location.hostname !== 'localhost') {
  ga();
}

id('rgbaDetails').open = window.innerWidth > 701;
id('colorList').appendChild(createOptionList());

id('random').addEventListener('click', () => {
  setHex(random16(6) + FF);
});

window.addEventListener('popstate', () => {
  const [isValid, color] = parseHex(location.hash);

  if (isValid) {
    setHex(color);
  }
});

tinykeys(window, {
  '$mod+z': () => {
    window.history.go(-1);
  },
  '$mod+Shift+z': () => {
    window.history.go(1);
  },
});

(() => {
  const [isValid, color] = parseHex(location.hash);
  const hex = isValid ? color : random16(6) + FF;

  setHex(hex);
})();
