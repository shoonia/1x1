import './global.css';
import { App } from './components/App';
import { dispatch, readyStore } from './store';
import { parseHex, randomHex } from './utils';

const [isValid, color] = parseHex(location.hash);
const hex = isValid ? color : randomHex(6) + 'ff';

history.pushState(1, '', '#' + hex);
document.body.append(<App />);

dispatch('set/hex', hex);
readyStore();
