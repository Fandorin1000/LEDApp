import React from 'react';
import classes from './StripImg.module.scss';

const StripImg = props => {
  const { imgSrc, artikul } = props;
  return (
    <div className={classes.imgBox}>
      <img src={imgSrc} alt={artikul} />
    </div>
  )
}
export default StripImg;