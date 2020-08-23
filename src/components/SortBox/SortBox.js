import React from 'react';
import classes from './SortBox.module.scss';
import SortList from './SortList/SortList';

const SortBox = props => {
  const { isShowSortList } = props;

  const sortedArray = [
    ['Сначала дешевле', props.sortedStripsStartLowPrice],
    ['Сначала дороже', props.sortedStripsStartHighPrice],
    ['Сначала мощные', props.sortedStripsStartHighPower],
    ['Сначала маломощные', props.sortedStripsStartLowPower]
  ];

  return (
    <div className={classes.sortListBox}>
      <h2 onClick={props.toggleIsShowSortList}>{isShowSortList ?
        "Свернуть" :
        "Показать"} сортировку</h2>
      {isShowSortList && <SortList listArray={sortedArray} />}
    </div>
  )
}
export default SortBox;