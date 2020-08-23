import React from 'react';
import classes from './FilterBox.module.scss';

const FilterBox = props => {
  const { isShowFilterList } = props;

  return (
    <div className={classes.filterListBox}>
      <h2 onClick={props.toggleIsShowFilterList}>
        {isShowFilterList ?
          'Свернуть' :
          'Показать'} фильтр</h2>
      {isShowFilterList && <ul>
        <ul>
          <h5>По исходящему напряжению</h5>
          <li onClick={props.filteredTwelveVolts}><span>12V</span></li>
          <li onClick={props.filteredTwentyFourVolts}><span>24V</span></li>
        </ul>
        <ul>
          <h5>По температуре света</h5>
          <li onClick={props.filteredWarmLight}><span>Теплый свет</span></li>
          <li onClick={props.filteredNeutralLight}><span>Нейтральный свет</span></li>
          <li onClick={props.filteredColdLight}><span>Холодный свет</span></li>
        </ul>
      </ul>}
    </div>
  )
}
export default FilterBox;