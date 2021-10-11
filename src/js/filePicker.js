export const isSupportFilePicker = typeof window.showSaveFilePicker === 'function';

/**
 * @param {string} suggestedName
 * @param {string} content
 */
export const saveFile = async (suggestedName, content) => {
  const file = await window.showSaveFilePicker({
    suggestedName,
  });

  const state = await file.queryPermission();

  if (state === 'granted') {
    const writable = await file.createWritable();

    await writable.write(content);
    await writable.close();
  }
};
