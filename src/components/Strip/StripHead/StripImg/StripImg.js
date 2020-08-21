import React from 'react';
import classes from './StripImg.module.scss';
import Spinner from '../../../UI/Spinner/Spinner';

const StripImg = props => {
  const { imgSrc, artikul } = props;
  return (
    <div className={classes.imgBox}>
      {!imgSrc ? <Spinner /> : <img src={imgSrc} alt={artikul} />}
    </div>

  )
}
export default StripImg;