import React from 'react';
import classes from './NavigationItems.module.scss';

const NavigationItems = props => {

  const cssClasses = [classes.navigationItems,
  props.isShowSideDrawer && classes.inSideDrawerShow
  ];
  return <ul className={cssClasses.join(' ')}>{props.children}</ul>
}
export default NavigationItems;