import './global.css';
import { App } from './components/App';
import { dispatch, readyStore } from './store';
import { parseHex, randomHex } from './utils';

const color = parseHex(location.hash);
const hex = color ? color : randomHex(6) + 'ff';

dispatch('set/hex', hex);

history.pushState(1, '', '#' + hex);
document.body.append(<App ready={readyStore} />);
