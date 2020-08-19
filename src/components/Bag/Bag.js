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
      <div
        onClick={() => props.deleteFromBag(element.id)}
        className={classes.deleteElementBox}>X</div>
      <div className={classes.imageBox}>
        <img src={element.imgSrc} alt={element.name} />
      </div>
      <div>
        <NavLink
          to={`strip/${element.id - 1}`}
          title={`Перейти к ${element.name}`}>
          <h2>{element.name}</h2>
        </NavLink>
      </div>
      <div className={classes.bagElementBtn}>
        <button
          onClick={() => props.decreased(element.id, element.price, element.currentPrice)}
          title="уменьшить"
        >-</button>
      </div>
      <div className={classes.bagElementMeters}><span>{element.amount} метр.</span></div>
      <div className={classes.bagElementBtn}>
        <button
          onClick={() => props.increased(element.id, element.price)}
          title="увеличить"
        >+</button>
      </div>
      <div className={classes.bagElementPrice}><span>{element.currentPrice} грн.</span></div>
    </div>
  ));
  if (sortedBagArray.length <= 0) {
    bag = <div className={classes.clearBagBox}>
      <div><span>Корзина пуста!</span></div>
      <div><NavLink to="/">Нажмите здесь чтоб перейти на главную!</NavLink></div>
    </div>
  } else if (sortedBagArray.length > 0) {
    bag = productsRender
    sum = sortedBagArray.reduce((accumulator, currentElement) => accumulator + currentElement.currentPrice, 0)
  }

  return (
    <div className={classes.bagBox}>
      {bag}
      {sum ? <div className={classes.totalCost}><span>Общая стоимость: <strong>{sum} грн.</strong></span></div> : null}
    </div>
  );
}

export default Bag;
