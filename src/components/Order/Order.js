import React from 'react';
import classes from './Order.module.scss';
import OrderForm from '../Forms/OrderForm/OrderForm';
import OrderSuccessModal from '../Modals/OrderSuccessModal/OrderSuccessModal';
import { Redirect } from 'react-router';

const Order = props => {
  const { sendOrder, isShowOrderSuccessModal, closeModal, bagArray, isWaitSendOrderData } = props;

  return (
    <div className={classes.orderBox}>
      <div><h1>Заполните данные получателя</h1></div>
      <div>
        {bagArray.length === 0 ?
          <Redirect to='/' /> :
          <OrderForm
            bagArray={bagArray}
            isWaitSendOrderData={isWaitSendOrderData}
            sendOrder={(orderData) => sendOrder(orderData)} />}
      </div>
      {isShowOrderSuccessModal ?
        <OrderSuccessModal
          clicked={closeModal} /> : null}
    </div>
  )
}
export default Order;