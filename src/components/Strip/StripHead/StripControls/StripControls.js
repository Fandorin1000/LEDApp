import React from 'react';
import classes from './StripControls.module.scss';
import Auxiliary from '../../../../hoc/Auxiliary';

const StripControls = props => {
  const { strip } = props;
  let stripControls = null;
  if (strip) {
    stripControls =
      <Auxiliary>
        <div className={classes.controlsBoxTitle}>
          <h1>{strip.name}</h1>
        </div>
        <div className={classes.controlsBoxCode}>
          <span>Код товара: {strip.code} </span>
        </div>
        <div className={classes.controlsBoxArtikul}>
          <span>Артикул: {strip.artikul} </span>
        </div>
        <div className={classes.controlsBoxMeters}>
          <span>На складе: {strip.metersInStore} метров</span>
        </div>
        <div className={classes.controlsBoxRating}>
          <span>Рейтинг: strip.rating/5</span>
        </div>
        <div className={classes.controlsBoxPrice}>
          <span>Цена: {strip.price} грн. за 1 метр </span>
        </div>
        <div className={classes.controlsBoxButton}>
          <button onClick={() => props.clickedBtn(strip)} >
            Добавить в корзину</button>
        </div>
      </Auxiliary>
  }
  return (
    <div className={classes.controlsBox}>
      {stripControls}
    </div>

  )
}
export default StripControls;