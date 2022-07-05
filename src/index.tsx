import { render } from 'solid-js/web';
import App from './App';
import 'virtual:windi.css';
import './index.css';

render(() => <App />, document.querySelector('div#root')!);
