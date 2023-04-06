const pixel = <canvas width={1} height={1} />;
const favicon = <canvas width={50} height={50} />;

export const createCanvas = (hex: string, alpha: number): HTMLCanvasElement => {
  const el = pixel.cloneNode() as HTMLCanvasElement;

  const ctx = el.getContext('2d', {
    alpha: alpha !== 255,
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

export const createFavicon = (color: string): string => {
  const el = favicon.cloneNode() as HTMLCanvasElement;

  const ctx = el.getContext('2d', {
    alpha: true,
    desynchronized: true,
    colorSpace: 'srgb',
  });

  if (ctx) {
    ctx.fillStyle = color,
    ctx.arc(25, 25, 24, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }

  return el.toDataURL('image/png', 0.1);
};
