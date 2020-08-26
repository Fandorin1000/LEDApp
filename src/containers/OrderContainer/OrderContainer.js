import React, { Component } from 'react';
import classes from './OrderContainer.module.scss';
import Order from '../../components/Order/Order';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
class OrderContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  sendOrderHandler = (orderObject) => {
    this.props.onSendOrder(orderObject)
  }
  closeOrderSuccessModalHandler = () => {
    this.props.onCloseOrderSuccessModal()
  }
  render() {
    const { isShowOrderSuccessModal, bagArray, isWaitSendOrderData } = this.props;
    return (
      <div className={classes.orderContainerBox}>
        <Order
          isWaitSendOrderData={isWaitSendOrderData}
          bagArray={bagArray}
          closeModal={this.closeOrderSuccessModalHandler}
          isShowOrderSuccessModal={isShowOrderSuccessModal}
          sendOrder={(orderObject) => this.sendOrderHandler(orderObject)} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  isShowOrderSuccessModal: state.UIPage.isShowOrderSuccessModal,
  bagArray: state.bagPage.bagArray,
  isWaitSendOrderData: state.UIPage.isWaitSendOrderData
})
const mapDispatchToProps = dispatch => ({
  onSendOrder: (orderObject) => dispatch(actions.sendOrderStartProgress(orderObject)),
  onCloseOrderSuccessModal: () => dispatch(actions.closeAllModals())
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);