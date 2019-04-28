export function fetchData(hex8) {
  return fetch('https://shoonia.wixsite.com/1x1-pixel/_functions/hex8/' + hex8)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      return { error: error };
    })
}
