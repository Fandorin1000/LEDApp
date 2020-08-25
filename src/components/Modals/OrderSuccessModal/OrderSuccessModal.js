import React from 'react';
import classes from './OrderSuccessModal.module.scss';

const OrderSuccessModal = props => {
  return (
    <div className={classes.orderSuccessModalBox} onClick={props.clicked}>
      <div><h2> Заказ сделан успешно!</h2></div>
      <div><span>Менеджер с Вами свяжется для уточнения заказа.</span></div>
    </div>
  )
}
export default OrderSuccessModal;