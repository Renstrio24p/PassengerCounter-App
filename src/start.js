import classNames from 'classnames/bind';
import styles from './css/modules/app.module.css';
import Render from './security/Render';
import { PassengerCount } from './js/passenger-counter'

export const cx = classNames.bind(styles);

export default function Start(DOM) {
	DOM.innerHTML = `
        <dom-js id='container'>
        
            <h1>People entered:</h1>
            <h2 id="count-el">0</h2>
            <button id='increment-btn' class='${styles['increment-btn']}'>Increment</button>
            <button id='decrement-btn' class='${styles['decrement-btn']}'>Decrement</button>
            <button id='save-btn' class='${styles['save-btn']}'>Save</button>
            <p id='save-el'></p>
            
        </dom-js>

        `;

    PassengerCount(DOM); /* PassengerCount function serve as 
                            <script src='passenger-counter.js'></script */
    
	Render(DOM); // Renders all the Element ID's
}
