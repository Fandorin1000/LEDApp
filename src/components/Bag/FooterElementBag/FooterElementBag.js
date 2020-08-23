import React from 'react'
import classes from './FooterElementBag.module.scss';

const FooterElementBag = props => {
  const { currentPrice, price, id, amount } = props;
  return (
    <div className={classes.footerBagElement}>
      <div className={classes.footerBagElementMeters}>
        <button
          onClick={() => props.decreased(id, price, currentPrice)}
          title="уменьшить"
        >-</button>
        <span>{amount} метр.</span>
        <button
          onClick={() => props.increased(id, price)}
          title="увеличить"
        >+</button>
      </div>
      <div className={classes.footerBagElementPrice}>
        <span>Цена за 1 метр: {price} грн.</span>
      </div>
      <div className={classes.footerBagElementPrice}>
        <span>Цена всего: <b>{currentPrice} грн.</b> за<b>{amount}</b> метр.      </span>
      </div>
    </div>
  )
}
export default FooterElementBag;