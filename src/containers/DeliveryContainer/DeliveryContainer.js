import React, { Component } from 'react'
import classes from './DeliveryContainer.module.scss';
import Delivery from '../../components/Delivery/Delivery';

class DeliveryContainer extends Component {
  render() {
    return (
      <div className={classes.deliveryContainer}>
        <Delivery />
      </div>
    )
  }

}
export default DeliveryContainer;