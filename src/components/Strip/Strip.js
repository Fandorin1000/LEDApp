import React from 'react';
import classes from './Strip.module.scss';
import { withRouter } from 'react-router';
import Spinner from '../UI/Spinner/Spinner';
import Auxiliary from '../../hoc/Auxiliary';

const Strip = props => {

  const { isWaitGetStrip, strip } = props;
  console.log(strip);
  let currentStrip = null;
  if (isWaitGetStrip) {
    currentStrip = <Spinner />
  }
  if (strip && !isWaitGetStrip) {
    console.log(strip.characteristics);
    currentStrip = (
      <Auxiliary>
        <div className={classes.stripHeadBox}>
          <div className={classes.imgBox}>
            <img src={strip.imgSrc} alt={strip.artikul} />
          </div>
          <div className={classes.controlsBox}>
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
              <button>Добавить в корзину</button>
            </div>
          </div>
        </div>
        <div className={classes.stripFooterBox}>
          <div className={classes.stripFooterBoxDescription}>
            <h3>Описание:</h3>
            <span>{strip.description}</span>
          </div>
          <div className={classes.stripFooterCharacteristicsBox}>
            <h3>Характеристики:</h3>
            <div><span>Бренд:</span> <span>{strip.characteristics.brand}</span></div>
            <div><span>Срок гарантии:</span> <span>{strip.characteristics.warranty} месяцев</span></div>
            <div><span>Температура света:</span> <span>{strip.characteristics.lighttemperature} кельвинов</span></div>
            <div><span>Мощность:</span> <span>{strip.characteristics.power} ват</span></div>
            <div><span>Рабочий ресурс:</span> <span>{strip.characteristics.lifetime}</span></div>
            <div><span>Цветопередача:</span> <span>{strip.characteristics.CRI}</span></div>
            <div><span>Степень влагозащиты:</span> <span>IP {strip.characteristics.IP}</span></div>
            <div><span>Тип светодиода:</span> <span>{strip.characteristics.Ledtype}</span></div>
            <div><span>Угол рассеивания:</span> <span>{strip.characteristics.Scatteringangle}&deg;</span></div>
            <div><span>Размер(ДхШ):</span> <span>{strip.characteristics.dimensions} мм.</span></div>
            <div><span>Колличество светодиодов:</span> <span>{strip.characteristics.ledsOnMetrs} шт/м</span></div>
            <div><span>Световой поток:</span> <span>{strip.characteristics.lightflow} люмен</span></div>
            <div><span>Светоотдача:</span> <span>{strip.characteristics.lightoutput} люмен/ват</span></div>
            <div><span>Рабочее напряжение:</span> <span>{strip.characteristics.power} вольт</span></div>

          </div>
        </div>
      </Auxiliary>
    )
  }
  return <div className={classes.stripBox}>
    {currentStrip}
  </div>
}


export default withRouter(Strip);