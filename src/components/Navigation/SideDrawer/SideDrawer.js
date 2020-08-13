import React from 'react';
import classes from './SideDrawer.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = props => {
  const { isShowSideDrawer } = props;
  const cssClasses = [
    classes.sideDrawer,
    isShowSideDrawer && classes.isOpenSideDrawer
  ]

  return <div
    onClick={props.clicked}
    className={cssClasses.join(' ')
    }>
    <NavigationItems>
      <NavigationItem link="/">Главная</NavigationItem>
      <NavigationItem link="/About">О компании</NavigationItem>
      <NavigationItem link="/Contacts">Контакты</NavigationItem>
      <NavigationItem link="/Delivery">Доставка</NavigationItem>
    </NavigationItems>
  </div>
}
export default SideDrawer;