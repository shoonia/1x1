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
