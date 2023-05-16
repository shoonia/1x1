import { getState } from '../../store';
import { createCanvas } from '../../utils/canvas';

const TYPE = 'image/png';
const QUALITY = 0.1;

export const createName = (hex: string) => `1x1_#${hex.toUpperCase()}.png`;

export const linkHandler = (link: HTMLAnchorElement): void => {
  link.addEventListener('click', () => {
    const { hex, a } = getState();
    const canvas = createCanvas(hex, a);

    link.download = createName(hex);
    link.href = canvas.toDataURL(TYPE, QUALITY);
  });
};

export const buttonHandler: EventListener = async () => {
  const { hex, a } = getState();
  const canvas = createCanvas(hex, a);

  const file = await window.showSaveFilePicker({
    suggestedName: createName(hex),
  });

  const state = await file.queryPermission();

  if (state === 'granted') {
    const [writable, blob] = await Promise.all([
      file.createWritable(),
      new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, TYPE, QUALITY)),
    ]);

    if (blob) {
      await writable.write(blob);
    }

    await writable.close();
  }
};
