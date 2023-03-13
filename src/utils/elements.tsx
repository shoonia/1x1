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
