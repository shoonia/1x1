export default function inputBind(x, y) {
  x.addEventListener('input', function () {
    y.value = x.value;
  });

  y.addEventListener('input', function () {
    x.value = y.value;
  });
}
