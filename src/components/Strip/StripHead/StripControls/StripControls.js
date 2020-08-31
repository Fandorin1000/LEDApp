import React from 'react';
import classes from './StripControls.module.scss';
import Auxiliary from '../../../../hoc/Auxiliary';
import StripRatingForm from '../../../Forms/StripRatingForm/StripRatingForm';
import Spinner from '../../../UI/Spinner/Spinner';

const StripControls = props => {
  const { strip, sendNewRatingNumber, isWaitSendNewRatingNumber } = props;
  let stripControls = null;
  if (strip) {
    const ratingArray = [];
    for (const item in strip.rating) {
      ratingArray.push(strip.rating[item])
    }
    console.log(ratingArray)
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
          <StripRatingForm
            isWaitSendNewRatingNumber={isWaitSendNewRatingNumber}
            sendNewRatingNumber={(number) => sendNewRatingNumber(number)}
            ratingArray={ratingArray} />
        </div>
        <div className={classes.controlsBoxPrice}>
          <span><strong>Цена: {strip.price} грн. за 1 метр</strong> </span>
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