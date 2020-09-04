import React from 'react';
import classes from './AddToBagSuccessModal.module.scss';

const AddToBagSuccessModal = props => {
  const { strip } = props;
  return (
    <div className={classes.addToBagSuccessModalBox} onClick={props.clicked}>
      <div><h2> {strip.name} Добавлен в корзину!</h2></div>
      <div className={classes.buttonsBox}>
        <div><button>Продолжить</button></div>
        <div><button>Перейти в корзину!</button></div>
      </div>

    </div>
  )
}
export default AddToBagSuccessModal;