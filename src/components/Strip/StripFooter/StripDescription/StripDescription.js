import React from 'react'
import classes from './StripDescription.module.scss';
import Auxiliary from '../../../../hoc/Auxiliary';

const StripDescription = props => {
  const { description, } = props;
  let descr = null;
  if (description) {
    descr = <div className={classes.stripFooterBoxDescription}>
      <h3>Описание:</h3>
      <span>{description}</span>
    </div>
  }
  return (
    <Auxiliary>{descr}</Auxiliary>

  )
}
export default StripDescription;
