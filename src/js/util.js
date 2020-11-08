export const id = ($) => {
  return document.getElementById($);
};

export const clipboard = (event) => {
  event.target.select();
  document.execCommand('copy');
};

export const createCanvas = (color) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 1;
  canvas.height = 1;

  ctx.rect(0, 0, 1, 1);
  ctx.fillStyle = color;
  ctx.fill();

  return canvas;
};

export const rgbToHex = (int) => {
  const i = Math.abs(~~int);

  if (i > 255) {
    return 'ff';
  }

  const hex = i.toString(16);

  return (hex.length < 2) ? ('0' + hex) : hex;
};

export const createHex = ({ R, G, B }) => {
  return [R, G, B].map(rgbToHex).join('');
};

export const unique16 = (size) => {
  let id = '';

  while (0 < size--) {
    id += (16 * Math.random() | 0).toString(16);
  }

  return id;
};
