export const isSupportFilePicker = typeof window.showSaveFilePicker === 'function';

/**
 * @param {string} suggestedName
 * @param {HTMLCanvasElement} canvas
 */
export const saveFile = async (suggestedName, canvas) => {
  const file = await window.showSaveFilePicker({
    suggestedName,
  });

  const state = await file.queryPermission();

  if (state === 'granted') {
    const [writable, blob] = await Promise.all([
      file.createWritable(),
      new Promise((r) => canvas.toBlob(r)),
    ]);

    await writable.write(blob);
    await writable.close();
  }
};
