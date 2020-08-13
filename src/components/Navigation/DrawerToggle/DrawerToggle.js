import classes from "./DrawerToggle.module.scss";
import React from 'react';
const DrawerToggle = props => <div
  className={classes.drawerToggleBox}
  onClick={props.clicked}>
  <div></div>
</div>
export default DrawerToggle;