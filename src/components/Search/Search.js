import classes from './Search.module.scss';
import React from 'react';
import StripsElement from '../StripsElement/StripsElement';
import { NavLink } from 'react-router-dom';

const Search = props => {
  const { foundStrips } = props;
  let stripsElement;
  if (foundStrips) {
    console.log(foundStrips)
    stripsElement = foundStrips.map(element => <NavLink key={element.id} to={`/strips/strip/${element.id - 1}`}>
      <StripsElement {...element} />
    </NavLink>)
  }
  return (
    <div className={classes.search}>
      <div className={classes.search__titleBox}>
        <h2>{foundStrips ?
          'Результаты поиска светодиодной ленты соответствующие вашему запросу' :
          'Светодиодная лента не найдена'}</h2>
        {!foundStrips && <NavLink to='/'>Перейти на главную страницу</NavLink>}
      </div>
      <div className={classes.foundStripsElements}>
        {stripsElement}
      </div>
    </div>

  )
}
export default Search;