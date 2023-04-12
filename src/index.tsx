import './global.css';
import { App } from './components/App';
import { Analytics } from './components/Analytics';
import { dispatch, readyStore } from './store';
import { getHex, randomHex } from './utils';

const color = getHex(location.hash);
const hex = color ? color : randomHex(6) + 'ff';

dispatch('hex', hex);
history.pushState(1, '', '#' + hex);

document.body.append(
  <App ready={readyStore} />,
  <Analytics />,
);
