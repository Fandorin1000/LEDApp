import React from 'react';

const SortList = props => {
  let listObjectUpdated;
  if (props.listArray) {
    listObjectUpdated = props.listArray.map(item => {
      return <li key={item} onClick={item[1]}><span>{item[0]}</span></li>
    });
  }

  return (
    <ul>
      {listObjectUpdated}
    </ul>
  )
}
export default SortList;