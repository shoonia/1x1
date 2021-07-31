const canvas = document.createElement('canvas');

/**
 * @param {string} color
 * @param {boolean} hasAlpha
 * @returns {HTMLCanvasElement}
 */
export const createCanvas = (color, hasAlpha) => {
  /** @type {HTMLCanvasElement} */
  const el = canvas.cloneNode();

  const ctx = el.getContext('2d', {
    alpha: hasAlpha,
    desynchronized: true,
  });

  el.width = 1;
  el.height = 1;

  ctx.fillStyle = color;
  ctx.rect(0, 0, 1, 1);
  ctx.fill();

  return el;
};

/**
 * @param {string} color
 * @returns {string}
 */
export const createFavicon = (color) => {
  /** @type {HTMLCanvasElement} */
  const el = canvas.cloneNode();

  const ctx = el.getContext('2d', {
    desynchronized: true,
  });

  el.width = 50;
  el.height = 50;

  ctx.fillStyle = color,
  ctx.arc(25, 25, 24, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  return el.toDataURL('image/png', 0.1);
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
