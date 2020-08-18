import React from 'react';
import classes from './Bag.module.scss';
import { NavLink } from 'react-router-dom';

const Bag = props => {
  const { bagArray } = props;
  let bag;
  let sum = 0;
  console.log(bagArray)
  const productsRender = bagArray.map(element => (
    <div key={element.id} className={classes.bagElement}>
      <div><h2>{element.name}</h2></div>
      <div className={classes.bagElementBtn}><button>-</button></div>
      <div className={classes.bagElementMeters}><span>{element.amount}
        {element.amount === 1 ? ' метр' :
          element.amount > 1 ? ' метра' :
            element.amount > 5 ? ' метров' :
              null}</span></div>
      <div className={classes.bagElementBtn}><button>+</button></div>
      <div className={classes.bagElementPrice}><span>{element.price} грн.</span></div>
    </div>
  ));
  if (bagArray.length <= 0) {
    bag = <p>Корзина пуста!</p>
  } else if (bagArray.length > 0) {
    bag = productsRender
    sum = bagArray.reduce((accumulator, currentElement) => accumulator + currentElement.price, 0)
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
