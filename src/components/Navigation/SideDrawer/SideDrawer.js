import React from 'react';
import classes from './SideDrawer.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = props => {
  const { isShowSideDrawer, bagArray } = props;
  const cssClasses = [
    classes.sideDrawer,
    isShowSideDrawer && classes.isOpenSideDrawer
  ]
  const productsInBag = (
    bagArray.length > 0 ? <span>(товаров{bagArray.length})</span> : <span>(пустая)</span>
  )

  return <div
    onClick={props.clicked}
    className={cssClasses.join(' ')
    }>
    <NavigationItems>
      <NavigationItem link="/">Главная</NavigationItem>
      <NavigationItem link="/about">О компании</NavigationItem>
      <NavigationItem link="/contacts">Контакты</NavigationItem>
      <NavigationItem link="/delivery">Доставка</NavigationItem>
      <NavigationItem link="/bag">Корзина {productsInBag}</NavigationItem>
    </NavigationItems>

  </div>
}
export default SideDrawer;