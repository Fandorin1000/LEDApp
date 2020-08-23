import React from 'react';
import classes from './FilterArguments.module.scss';
import Auxiliary from '../../../hoc/Auxiliary';
const FilterArguments = props => {
  const { filterElementOfArguments } = props;
  console.log(filterElementOfArguments)
  let renderClickedFilterArguments;
  let filterElementOfArgumentsUpdated;
  if (filterElementOfArguments.length > 0) {
    filterElementOfArgumentsUpdated = filterElementOfArguments.map((element, index) => (
      <div
        className={classes.filterElementBox}
        key={element}>
        <p>{index + 1}. {element}</p>
      </div>
    ));
    renderClickedFilterArguments = (
      <Auxiliary>
        <div>
          <button
            onClick={props.refreshFilterArguments}>
            Сбросить фильтр</button>
        </div>
        <h3>Параметры фильтации:</h3>
        {filterElementOfArgumentsUpdated}
      </Auxiliary>
    )
  }
  return (
    <div className={classes.filterArgumentsBox}>
      {renderClickedFilterArguments}
    </div>

  )
}
export default FilterArguments;