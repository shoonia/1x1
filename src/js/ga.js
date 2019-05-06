function getCID() {
  var cid = document.cookie.replace(/(?:(?:^|.*;\s*)cid\s*\=\s*([^;]*).*$)|^.*$/, '$1');

  if (!cid) {
    var i = 16;

    while (0 < i--) {
      cid += (36 * Math.random() | 0).toString(36);
    }

    document.cookie = 'cid=' + cid + ';domain=shoonia.github.io;max-age=' + 60 * 60 * 24 * 365;
  }

  return cid;
}

export default function () {
  (new Image()).src = 'https://www.google-analytics.com/collect?v=1&tid=UA-128241641-2&aip=1&t=event&ea=open&dp=&dt=&cid=' + getCID();
}
