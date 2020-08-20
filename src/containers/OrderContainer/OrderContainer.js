import React, { Component } from 'react';
import classes from './OrderContainer.module.scss';
import Order from '../../components/Order/Order';
class OrderContainer extends Component {
  render() {
    return (
      <div className={classes.orderContainerBox}>
        <Order />
      </div>
    )
  }
}

export default OrderContainer