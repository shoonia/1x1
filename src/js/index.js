import tinykeys from 'tinykeys';
import rgbHex from 'rgb-hex';

import '../css/styles.css';
import { ga } from './ga';
import { colors, createOptionList } from './colors';
import { connect, dispatch, getState } from './store';
import { createCanvas, createFavicon, one, all, random16, decimalToHex, clipboard } from './util';
import { isSupportFilePicker, saveFile } from './filePicker';

const inputColor = one('#inputColor');
const inputAlpha = one('#inputAlpha');
const picker = one('#picker');
const rangeRed = one('#rangeRed');
const numberRed = one('#numberRed');
const rangeGreen = one('#rangeGreen');
const numberGreen = one('#numberGreen');
const rangeBlue = one('#rangeBlue');
const numberBlue = one('#numberBlue');
const rangeAlpha = one('#rangeAlpha');
const numberAlpha = one('#numberAlpha');
const outputImage = one('#outputImage');
const outputBadge = one('#outputBadge');
const outputDataURL = one('#outputDataURL');
const outputBase64 = one('#outputBase64');
const outputCSS = one('#outputCSS');
const outputBytes = one('#outputBytes');
const outputLink = one('#outputLink');
const download = one('#download');
const favicon = one('link[rel="icon"]');

const fileReader = new FileReader();

const FF = 'ff';
const SYMBOL_HASH = /^#/;
const NOT_HEXADECIMAL = /[^\da-f]/ig;
const MACOS = /Mac OS/i;
const SMARTPHONE = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;

const setHex = (hex) => dispatch('hex', hex);

const setRGBA = ({ target }) => {
  return dispatch('rgba', [
    target.dataset.rgba,
    target.valueAsNumber,
  ]);
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
    .replace(SYMBOL_HASH, '');

  if (color in colors) {
    color = colors[color];
  }

  if (NOT_HEXADECIMAL.test(color)) {
    try {
      color = rgbHex(value);
    } catch {
      return [false];
    }
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

if (process.env.NODE_ENV === 'production') {
  ga();
}

if (SMARTPHONE.test(navigator.userAgent)) {
  one('#history').remove();
} else {
  const isMac = MACOS.test(navigator.userAgent);
  const os = isMac ? '[data-hint="darwin"]' : '[data-hint="win"]';

  const undo = () => {
    if (history.state === null) {
      history.go(-1);
    }
  };

  const redo = () => history.go(1);

  tinykeys(window, {
    '$mod+z': undo,
    '$mod+Shift+z': redo,
  });

  one('#undo').addEventListener('click', undo);
  one('#redo').addEventListener('click', redo);
  all(os).forEach((i) => {
    i.hidden = false;
  });
}

if (isSupportFilePicker) {
  download.addEventListener('click', (event) => {
    const { download, href } = event.target;

    event.preventDefault();
    event.stopImmediatePropagation();
    saveFile(download, href);
  });
}

{
  const [isValid, color] = parseHex(location.hash);
  const hexColor = isValid ? color : random16(6) + FF;

  history.pushState(1, null, `#${hexColor}`);
  setHex(hexColor);
}

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

  dispatch('rgba', [
    'A',
    parseInt(hex, 16),
  ]);
});

picker.addEventListener('change', () => {
  const [isValid, color] = parseHex(picker.value);

  if (isValid) {
    setHex(color);
  }
});

fileReader.addEventListener('load', () => {
  const bytes = new Uint8Array(fileReader.result);

  outputBytes.value = bytes.toString();
  outputBadge.textContent = `1x1 (${bytes.length} bytes)`;
});

all('[data-rgba]').forEach((i) => {
  i.addEventListener('change', setRGBA);
});

all('[data-clipboard]').forEach((i) => {
  i.addEventListener('click', clipboard);
});

one('#rgbaDetails').open = window.innerWidth > 701;
one('#colorList').appendChild(createOptionList());

one('#random').addEventListener('click', () => {
  setHex(random16(6) + FF);
});

window.addEventListener('popstate', () => {
  const { hex } = getState();
  const hash = location.hash.slice(1);

  if (hash === hex) {
    return;
  }

  const [isValid, color] = parseHex(hash);

  if (isValid) {
    setHex(color);
  }
});

connect('hex', ({ hex, A }) => {
  const hex6 = hex.slice(0, 6);
  const hex8 = `#${hex}`;

  const canvas = createCanvas(hex8, A !== 255);
  const dataURL = canvas.toDataURL('image/png', 0.1);
  const base64 = dataURL.slice(22);

  const url = `url(${dataURL})`;
  const backgroundImage = `background-image: ${url};`;
  const css = `display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;${backgroundImage}`;

  console.log('%c  ', css, hex8);
  canvas.toBlob(readAsArrayBuffer);
  location.hash = hex8;
  document.title = `1x1 Pixel PNG | ${hex8}`;
  favicon.href = createFavicon(hex8);
  inputColor.value = hex6;
  picker.value = `#${hex6}`;
  outputImage.style.backgroundImage = url;
  outputImage.title = `8-Digit Hex: ${hex8}`;
  outputDataURL.value = dataURL;
  outputCSS.value = backgroundImage;
  outputBase64.value = base64;
  outputLink.value = location.href;
  download.href = dataURL;
  download.download = `1x1_${hex8}.png`;

  if (base64.length === 96) {
    navigator.sendBeacon(
      `https://shoonia.wixsite.com/colors/_functions/ping/${hex}/${encodeURIComponent(base64)}`,
    );
  }
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
