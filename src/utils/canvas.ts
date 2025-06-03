import { jsx } from 'jsx-dom-runtime';

const favicon = jsx('canvas', { width: 50, height: 50 });

const ctx = favicon.getContext('2d', {
  alpha: true,
  desynchronized: true,
  colorSpace: 'srgb',
})!;

ctx.arc(25, 25, 24, 0, 2 * Math.PI);

export const createFavicon = (color: string): string => {
  ctx.fillStyle = color;
  ctx.stroke();
  ctx.fill();

  return favicon.toDataURL('image/png', 0.1);
};
