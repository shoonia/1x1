import { uniqueId16 } from './util';

function getCID() {
  const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)cid\s*=\s*([^;]*).*$)|^.*$/, '$1');
  const cid = cookie !== '' ? cookie : uniqueId16(21);

  document.cookie = 'cid='
    + cid
    + ';domain=shoonia.github.io;max-age='
    + (60 * 60 * 24 * 365);

  return cid;
}

export default function () {
  const url = 'https://www.google-analytics.com/collect?v=1&tid=UA-128241641-2&aip=1&t=event&ea=open&dp=&dt=&cid='
    + getCID();

  let isSend = false;

  try {
    isSend = navigator.sendBeacon(url);
  } catch (error) { /**/ }

  if (!isSend) {
    (new Image()).src = url;
  }
}
