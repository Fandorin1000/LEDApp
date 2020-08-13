import React from 'react';
import classes from './Backdrop.module.scss';
const Backdrop = props => props.isShowBackdrop ?
  <div className={classes.backdrop}
    onClick={props.clicked}></div> :
  null
export default Backdrop;