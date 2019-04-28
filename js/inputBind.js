export default function inputBind(x, y) {
  x.addEventListener('change', function () {
    y.value = x.value;
  });

  y.addEventListener('change', function () {
    x.value = y.value;
  });
}
