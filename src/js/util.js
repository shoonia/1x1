export function getById(id) {
  return document.getElementById(id);
}

export function rgbToHex(int) {
  var i = Math.abs(~~int);

  if (255 < i) {
    return 'ff';
  }

  var hex = i.toString(16);

  return 2 > hex.length ? ('0' + hex) : hex;
}

export function bindInputs(x, y) {
  x.addEventListener('input', function () {
    y.value = x.value || '0';
  });

  y.addEventListener('input', function () {
    x.value = y.value || '0';
  });
}

export function debounce(fn, ms) {
  var timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, ms);
  }
};

