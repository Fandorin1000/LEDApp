import React from 'react';
import classes from './NavigationItem.module.scss';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => {
  return <li className={classes.navigationItem}>
    <NavLink
      className={classes.navigationLink}
      to={props.link}>
      {props.children}
    </NavLink>
  </li>
}
export default NavigationItem;