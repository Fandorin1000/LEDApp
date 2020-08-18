import React from 'react';
import classes from './Bag.module.scss';
import { NavLink } from 'react-router-dom';

const Bag = props => {
  const { bagArray } = props;
  const sortedBagArray = bagArray.sort((a, b) => a.id - b.id)
  let bag;
  let sum = 0;
  console.log(bagArray)
  const productsRender = sortedBagArray.map(element => (
    <div key={element.id} className={classes.bagElement}>
      <div><h2>{element.name}</h2></div>
      <div className={classes.bagElementBtn}>
        <button onClick={() => props.decreased(element.id, element.price, element.currentPrice)}>-</button>
      </div>
      <div className={classes.bagElementMeters}><span>{element.amount} метр.</span></div>
      <div className={classes.bagElementBtn}>
        <button onClick={() => props.increased(element.id, element.price)}>+</button>
      </div>
      <div className={classes.bagElementPrice}><span>{element.currentPrice} грн.</span></div>
    </div>
  ));
  if (sortedBagArray.length <= 0) {
    bag = <p>Корзина пуста!</p>
  } else if (sortedBagArray.length > 0) {
    bag = productsRender
    sum = sortedBagArray.reduce((accumulator, currentElement) => accumulator + currentElement.currentPrice, 0)
  }

  return (
    <div className={classes.bagBox}>
      {bag}
      {sum ? <div className={classes.totalCost}><span>Общая стоимость: <strong>{sum} грн.</strong></span></div> : null}
      <div><NavLink to="/">Нажмите здесь чтоб перейти на главную!</NavLink></div>
    </div>
  );
}

export default Bag;
