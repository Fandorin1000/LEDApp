import React, { Component } from 'react';
import classes from './HeadContainer.module.scss';
import DrawerToggle from '../../components/Navigation/DrawerToggle/DrawerToggle';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import NavigationItem from '../../components/Navigation/NavigationItem/NavigationItem';

class HeadContainer extends Component {
  render() {
    return (
      <div className={classes.headContainer}>
        <div className={classes.logoBox}>
          <img src='https://led-stil.com/image/catalog/led/logo1.png' alt="led-stil logo elephant" />
        </div>
        <DrawerToggle />
        <NavigationItems>
          <NavigationItem link="about">О компании</NavigationItem>
        </NavigationItems>

      </div>
    )
  }
}

export default HeadContainer
