import React from 'react';
import classes from './ErrorModal.module.scss';

const ErrorModal = props => {
  console.log(props);

  return props.error ?
    <div className={classes.errorModalBox} onClick={props.clicked}>
      <div><h2>Упс!</h2></div>
      <div><span>{props.error.message}</span></div>
    </div> :
    null
}
export default ErrorModal;