import React from 'react';
import classes from './Bag.module.scss';

const Bag = props => {
  const { bagArray } = props;
  const productsRender = bagArray.map(element => (
    <div>
      <div>{element.name}</div>
      <div>{element.artikul}</div>
      <div>{element.price}</div>
    </div>
  ));
  console.log(productsRender)
  return (
    <div className={classes.bagBox}>
      {productsRender}

      <p>Корзина пуста!</p>

      <p>Нажмите здесь чтоб перейти на главную!</p>
    </div>
  );
}

export default Bag;
