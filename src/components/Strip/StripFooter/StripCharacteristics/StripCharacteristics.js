import React from 'react'
import classes from './StripCharacteristics.module.scss';
import Auxiliary from '../../../../hoc/Auxiliary';

const StripCharacteristics = props => {
  const { characteristics } = props;
  let charsList = null;
  if (characteristics) {
    charsList = <div className={classes.stripFooterCharacteristicsBox}>
      <h3>Характеристики:</h3>
      <div><span>Бренд:</span> <span>{characteristics.brand}</span></div>
      <div><span>Срок гарантии:</span> <span>{characteristics.warranty} месяцев</span></div>
      <div><span>Температура света:</span> <span>{characteristics.lighttemperature} кельвинов</span></div>
      <div><span>Мощность:</span> <span>{characteristics.power} ват</span></div>
      <div><span>Рабочий ресурс:</span> <span>{characteristics.lifetime}</span></div>
      <div><span>Цветопередача:</span> <span>{characteristics.CRI}</span></div>
      <div><span>Степень влагозащиты:</span> <span>IP {characteristics.IP}</span></div>
      <div><span>Тип светодиода:</span> <span>{characteristics.Ledtype}</span></div>
      <div><span>Угол рассеивания:</span> <span>{characteristics.Scatteringangle}&deg;</span></div>
      <div><span>Размер(ДхШ):</span> <span>{characteristics.dimensions} мм.</span></div>
      <div><span>Колличество светодиодов:</span> <span>{characteristics.ledsOnMetrs} шт/м</span></div>
      <div><span>Световой поток:</span> <span>{characteristics.lightflow} люмен</span></div>
      <div><span>Светоотдача:</span> <span>{characteristics.lightoutput} люмен/ват</span></div>
      <div><span>Рабочее напряжение:</span> <span>{characteristics.power} вольт</span></div>
    </div>
  }
  return (<Auxiliary>
    {charsList}
  </Auxiliary>

  )
}
export default StripCharacteristics;
