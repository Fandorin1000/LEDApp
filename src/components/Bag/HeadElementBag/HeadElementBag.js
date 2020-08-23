import React from 'react'
import classes from './HeadElementBag.module.scss';
import { NavLink } from 'react-router-dom';

const HeadElementBag = props => {
  const { imgSrc, name, id } = props;
  return (
    <div className={classes.headBagElement}>
      <div className={classes.imageBox}>
        <img src={imgSrc} alt={name} />
      </div>
      <div className={classes.nameBox}>
        <NavLink
          to={`strip/${id - 1}`}
          title={`Перейти к ${name}`}>
          <h2>{name}</h2>
        </NavLink>
      </div>
    </div>
  )
}
export default HeadElementBag
