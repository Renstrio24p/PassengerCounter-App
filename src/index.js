import Start from './start';
import './css/index.css';
import UniqueHash from './security/HashCode';

const DOM = document.querySelector('#app');
DOM.id = UniqueHash();

Start(DOM); // Renders the Element ID
