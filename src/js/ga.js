function getCID() {
  var cid = sessionStorage.getItem('cid');

  if (null == cid) {
    cid = 'xxxxxxxxxxxxxxxx'.replace(/x/g, function () {
      return (Math.random() * 16 | 0).toString(16);
    });

    sessionStorage.setItem('cid', cid);
  }

  return cid;
}

export default function () {
  (new Image()).src = 'https://www.google-analytics.com/collect?v=1&tid=UA-128241641-2&aip=1&t=event&ea=open&dp=&dt=&cid=' + getCID();
}

