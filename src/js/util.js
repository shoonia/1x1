const canvas = document.createElement('canvas');

export const createCanvas = (color) => {
  const el = canvas.cloneNode();
  const ctx = el.getContext('2d');

  el.width = 1;
  el.height = 1;

  ctx.fillStyle = color;
  ctx.rect(0, 0, 1, 1);
  ctx.fill();

  return el;
};

export const createFavicon = (color) => {
  const el = canvas.cloneNode();
  const ctx = el.getContext('2d');

  el.width = 50;
  el.height = 50;

  Object.assign(ctx, {
    fillStyle: color,
    lineWidth: 4,
    strokeStyle: '#c6e2f7',
  });

  ctx.beginPath();
  ctx.arc(25, 25, 20, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  return el.toDataURL('image/png');
};

export const one = ($) => {
  return document.querySelector($);
};

export const all = ($) => {
  return document.querySelectorAll($);
};

export const clipboard = (event) => {
  event.target.select();
  document.execCommand('copy');
};

export const parseNumber = (n) => {
  const i = Math.abs(~~n);

  return i > 255 ? 255 : i;
};

export const decimalToHex = (i) => {
  const hex = i.toString(16);

  return (hex.length < 2) ? ('0' + hex) : hex;
};

export const createHex = ({ R, G, B, A }) => {
  return [R, G, B, A].map(decimalToHex).join('');
};

export const random16 = (size) => {
  let id = '';

  while (0 < size--) {
    id += (16 * Math.random() | 0).toString(16);
  }

  return id;
};
