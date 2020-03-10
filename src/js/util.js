export function id($) {
  return document.getElementById($);
}

export function rgbToHex(int) {
  const i = Math.abs(~~int);

  if (255 < i) {
    return 'ff';
  }

  const hex = i.toString(16);

  return 2 > hex.length ? ('0' + hex) : hex;
}

export function bindInputs(x, y) {
  x.addEventListener('input', () => {
    y.value = x.value || '0';
  });

  y.addEventListener('input', () => {
    x.value = y.value || '0';
  });
}

export function debounce(fn, ms) {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, ms);
  };
}

export function uniqueId16(size) {
  let id = '';

  while (0 < size--) {
    id += (16 * Math.random() | 0).toString(16);
  }

  return id;
}
