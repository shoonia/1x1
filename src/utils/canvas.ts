import { jsx } from 'jsx-dom-runtime';

const pixel = jsx('canvas', { width: 1, height: 1 });

export const createCanvas = (hex: string, alpha: number): HTMLCanvasElement => {
  const el = pixel.cloneNode() as HTMLCanvasElement;

  const ctx = el.getContext('2d', {
    alpha: alpha < 255,
    desynchronized: true,
    colorSpace: 'srgb',
  });

  if (ctx) {
    ctx.fillStyle = '#' + hex;
    ctx.rect(0, 0, 1, 1);
    ctx.fill();
  }

  return el;
};

const favicon = jsx('canvas', { width: 50, height: 50 });

const ctx = favicon.getContext('2d', {
  alpha: true,
  desynchronized: true,
  colorSpace: 'srgb',
})!;

ctx.arc(25, 25, 24, 0, 2 * Math.PI);

export const createFavicon = (color: string): string => {
  ctx.fillStyle = color,
  ctx.stroke();
  ctx.fill();

  return favicon.toDataURL('image/png', 0.1);
};
