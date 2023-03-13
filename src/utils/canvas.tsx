export const createCanvas = (hex: string, alpha: number): HTMLCanvasElement => {
  const canvas = <canvas width={1} height={1} /> as HTMLCanvasElement;

  const ctx = canvas.getContext('2d', {
    alpha: alpha !== 255,
    desynchronized: true,
    colorSpace: 'srgb',
  });

  if (ctx) {
    ctx.fillStyle = '#' + hex;
    ctx.rect(0, 0, 1, 1);
    ctx.fill();
  }

  return canvas;
};

export const createFavicon = (color: string): string => {
  const canvas = <canvas width={50} height={50} /> as HTMLCanvasElement;

  const ctx = canvas.getContext('2d', {
    alpha: true,
    desynchronized: true,
  });

  if (ctx) {
    ctx.fillStyle = color,
    ctx.arc(25, 25, 24, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }

  return canvas.toDataURL('image/png', 0.1);
};
