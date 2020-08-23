import React from 'react';
import classes from './Bag.module.scss';
import { NavLink } from 'react-router-dom';
import HeadElementBag from './HeadElementBag/HeadElementBag';
import FooterElementBag from './FooterElementBag/FooterElementBag';

const Bag = props => {
  const { bagArray } = props;
  const sortedBagArray = bagArray.sort((a, b) => a.id - b.id)
  let bag;
  let sum = 0;
  const productsRender = sortedBagArray.map(element => (
    <div key={element.id} className={classes.bagElement}>
      <div onClick={() => props.deleteFromBag(element.id)} className={classes.deleteElementBox}>        X        </div>
      <HeadElementBag
        imgSrc={element.imgSrc}
        name={element.name}
        id={element.id}
      />
      <FooterElementBag
        decreased={() => props.decreased(element.id, element.price, element.currentPrice)}
        increased={() => props.increased(element.id, element.price)}
        id={element.id}
        price={element.price}
        currentPrice={element.currentPrice}
        amount={element.amount}
      />
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
      {sum ? <div className={classes.totalCost}>
        <span>Общая стоимость заказа: <strong>{sum} грн.</strong></span>
      </div> : null}
      {sum > 0 && <div className={classes.toOrderBtnBox}>
        <button
          onClick={props.toBagMove} >Продолжить</button>
      </div>
      }
    </div>
  );
}

export default Bag;
