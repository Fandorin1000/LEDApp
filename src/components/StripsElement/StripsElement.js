import React from 'react';
import classes from './StripsElement.module.scss';
import Auxiliary from '../../hoc/Auxiliary';

const StripsElement = props => {
  const element = props;

  const strip = (
    <Auxiliary>
      <div className={classes.stripsElementHead}>
        <div className={classes.stripsElementImgBox}>
          <img src={element.imgSrc} alt={element.imgSrc} />
        </div>
      </div>
      <div className={classes.stripsElementFooter}>
        <div><h4>{element.name}</h4></div>
        <div><span>В наличии {element.metersInStore} метров</span></div>
        <div><span>Код товара {element.code}</span></div>
        <div><span>Цена {element.price} грн. за 1 метр</span></div>
      </div>
    </Auxiliary>
  )
  return (
    <div className={classes.stripsElementBox}>
      {strip}
    </div>
  )
}
export default StripsElement;