import React, { Component } from 'react';
import classes from './HeadContainer.module.scss';

class HeadContainer extends Component {
  render() {
    return (
      <div className={classes.headContainer}>
        <div className={classes.logoBox}>
          <img src='https://led-stil.com/image/catalog/led/logo1.png' alt="led-stil logo elephant" />
        </div>

      </div>
    )
  }
}

export default HeadContainer
