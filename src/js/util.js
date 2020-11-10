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

export const parseNumber = (n) => {
  const i = Math.abs(~~n);

  return i > 255 ? 255 : i;
};

export const decimalToHex = (i) => {
  const hex = i.toString(16);

  return (hex.length < 2) ? ('0' + hex) : hex;
};

export const createHex = ({ R, G, B }) => {
  return [R, G, B].map(decimalToHex).join('');
};

export const unique16 = (size) => {
  let id = '';

  while (0 < size--) {
    id += (16 * Math.random() | 0).toString(16);
  }

  return id;
};
