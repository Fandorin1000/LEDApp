import React from 'react';
import classes from './NavigationItems.module.scss';

const NavigationItems = props => <ul className={classes.navigationItems}>{props.children}</ul>
export default NavigationItems;