import './global.css';
import { App } from './components/App';
import { dispatch } from './store';
import { getHex, randomHex } from './utils';

const color = getHex(location.hash);
const hex = color ? color : randomHex();

dispatch('hex', hex);
history.replaceState(1, '', '#' + hex);

document.body.append(<App />);
