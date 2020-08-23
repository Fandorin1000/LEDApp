import React from 'react';

const FilterList = props => {
  const { filterArray } = props;
  let filterArrayUpdated;
  if (filterArray) {
    filterArrayUpdated = filterArray.map(item => {
      return <ul>
        <li key={item} onClick={item[1]}><span>{item[0]}</span></li>
      </ul>
    });
  }

  return (
    <ul>
      <h5>{filterArray.title}</h5>
      <li onClick={this.filteredTwelveVoltsHandler}><span>12V</span></li>
      <li onClick={this.filteredTwentyFourVoltsHandler}><span>24V</span></li>
    </ul>
  )
}
export default FilterList;