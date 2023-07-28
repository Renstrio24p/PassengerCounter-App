import styles from '../css/modules/app.module.css';

let count = 0,
  IncrementBTN,
  DecrementBTN,
  CountField,
  SaveBTN,
  SaveEL,
  countInterval;

export const PassengerCount = (DOM) => {
  IncrementBTN = DOM.querySelector('#increment-btn');
  DecrementBTN = DOM.querySelector('#decrement-btn');
  CountField = DOM.querySelector('#count-el');
  SaveBTN = DOM.querySelector('#save-btn');
  SaveEL = DOM.querySelector('#save-el');

  IncrementBTN.addEventListener('mousedown', startIncrement);
  IncrementBTN.addEventListener('mouseup', stopIncrement);
  IncrementBTN.addEventListener('mouseout', stopIncrement);

  DecrementBTN.addEventListener('mousedown', startDecrement);
  DecrementBTN.addEventListener('mouseup', stopIncrement);
  DecrementBTN.addEventListener('mouseout', stopIncrement);

  function startIncrement() {
    countInterval = setInterval(() => {
      count++;
      CountField.innerHTML = count;

      CountField.classList.add('smooth-loading');

      if (count < 10) {
        CountField.classList.remove(`${styles['yellow-bg']}`, `${styles['red-bg']}`, `${styles['black-bg']}`,`${styles['orange-bg']}`);
        CountField.classList.add(`${styles['green-bg']}`);
      } else if (count < 100) {
        CountField.classList.remove(`${styles['green-bg']}`, `${styles['red-bg']}`, `${styles['black-bg']}`,`${styles['orange-bg']}`);
        CountField.classList.add(`${styles['yellow-bg']}`);
      }  else if (count < 500) {
        CountField.classList.remove(`${styles['green-bg']}`, `${styles['red-bg']}`, `${styles['black-bg']}`,`${styles['yellow-bg']}`);
        CountField.classList.add(`${styles['orange-bg']}`);
      } else if (count < 1000) {
        CountField.classList.remove(`${styles['green-bg']}`, `${styles['yellow-bg']}`, `${styles['black-bg']}`,`${styles['orange-bg']}`);
        CountField.classList.add(`${styles['red-bg']}`);
      } else {
        CountField.classList.remove(`${styles['green-bg']}`, `${styles['yellow-bg']}`, `${styles['red-bg']}`,`${styles['orange-bg']}`);
        CountField.classList.add(`${styles['black-bg']}`);
      }
    }, 50);
  }
  function startDecrement() {
    countInterval = setInterval(() => {
      count--;
      CountField.innerHTML = count;

      CountField.classList.add('smooth-loading');

      if (count < 10) {
        CountField.classList.remove(`${styles['yellow-bg']}`, `${styles['red-bg']}`, `${styles['black-bg']}`,`${styles['orange-bg']}`);
        CountField.classList.add(`${styles['green-bg']}`);
      } else if (count < 100) {
        CountField.classList.remove(`${styles['green-bg']}`, `${styles['red-bg']}`, `${styles['black-bg']}`,`${styles['orange-bg']}`);
        CountField.classList.add(`${styles['yellow-bg']}`);
      }  else if (count < 500) {
        CountField.classList.remove(`${styles['green-bg']}`, `${styles['red-bg']}`, `${styles['black-bg']}`,`${styles['yellow-bg']}`);
        CountField.classList.add(`${styles['orange-bg']}`);
      } else if (count < 1000) {
        CountField.classList.remove(`${styles['green-bg']}`, `${styles['yellow-bg']}`, `${styles['black-bg']}`,`${styles['orange-bg']}`);
        CountField.classList.add(`${styles['red-bg']}`);
      } else {
        CountField.classList.remove(`${styles['green-bg']}`, `${styles['yellow-bg']}`, `${styles['red-bg']}`,`${styles['orange-bg']}`);
        CountField.classList.add(`${styles['black-bg']}`);
      }
    }, 50);
  }

  function stopIncrement() {
    clearInterval(countInterval);

    setTimeout(() => {
      CountField.classList.remove('smooth-loading');
    }, 1000);
  }

  SaveBTN.addEventListener('click', Save);

  function Save() {

	if (count === 0) {
		ResetBG();
	  } else {

    const NewDiv = document.createElement('card');
    NewDiv.classList.add(`${styles.card}`)
    NewDiv.innerHTML = count;
    SaveEL.appendChild(NewDiv);

	 if (count < 10) {
		NewDiv.classList.add(`${styles['green-bg']}`);
	  } else if (count < 100) {
		NewDiv.classList.add(`${styles['yellow-bg']}`);
	  } else if (count < 499) {
		NewDiv.classList.add(`${styles['orange-bg']}`);
	  } else if (count < 1000) {
		NewDiv.classList.add(`${styles['red-bg']}`);
	  } else {
		NewDiv.classList.add(`${styles['black-bg']}`);
	  }
      count = 0;
	  ResetBG();
	  }


    CountField.innerHTML = count;

    function ResetBG(){
		CountField.classList.remove(`${styles['yellow-bg']}`, `${styles['red-bg']}`, `${styles['black-bg']}`,`${styles['orange-bg']}`);
		CountField.classList.add(`${styles['green-bg']}`);
	}
  }
};
