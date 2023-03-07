import { App } from './components/App';
import { readyStore } from './store';

document.body.append(<App />);

readyStore();
