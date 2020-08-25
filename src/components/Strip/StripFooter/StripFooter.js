import React from 'react';
import classes from './StripFooter.module.scss';
import Auxiliary from '../../../hoc/Auxiliary';
import Spinner from '../../UI/Spinner/Spinner';

const StripFooter = props => {
  const { isWaitGetStrip, strip } = props;

  let stripFooter = null;
  if (isWaitGetStrip) {
    stripFooter = <Spinner />
  }
  if (strip) {
    stripFooter = <div className={classes.stripFooterBox}>
      <div className={classes.stripFooterBoxDescription}>
        <h3>Описание:</h3>
        <span>{strip.description}</span>
      </div>
      <div className={classes.stripFooterCharacteristicsBox}>
        <h3>Характеристики:</h3>
        <div><span>Бренд:</span> <span>{strip.characteristics.brand}</span></div>
        <div><span>Срок гарантии:</span> <span>{strip.characteristics.warranty} месяцев</span></div>
        <div><span>Температура света:</span> <span>{strip.characteristics.lighttemperature} кельвинов</span></div>
        <div><span>Мощность:</span> <span>{strip.characteristics.power} ват</span></div>
        <div><span>Рабочий ресурс:</span> <span>{strip.characteristics.lifetime}</span></div>
        <div><span>Цветопередача:</span> <span>{strip.characteristics.CRI}</span></div>
        <div><span>Степень влагозащиты:</span> <span>IP {strip.characteristics.IP}</span></div>
        <div><span>Тип светодиода:</span> <span>{strip.characteristics.Ledtype}</span></div>
        <div><span>Угол рассеивания:</span> <span>{strip.characteristics.Scatteringangle}&deg;</span></div>
        <div><span>Размер(ДхШ):</span> <span>{strip.characteristics.dimensions} мм.</span></div>
        <div><span>Колличество светодиодов:</span> <span>{strip.characteristics.ledsOnMetrs} шт/м</span></div>
        <div><span>Световой поток:</span> <span>{strip.characteristics.lightflow} люмен</span></div>
        <div><span>Светоотдача:</span> <span>{strip.characteristics.lightoutput} люмен/ват</span></div>
        <div><span>Рабочее напряжение:</span> <span>{strip.characteristics.power} вольт</span></div>
      </div>
      <div className={classes.commentsBox}>
        <h2>Отзывы про ленту:</h2>
        {strip.comments.map(commentElement => <div key={commentElement.id}>
          <fieldset>
            <legend>Дата отзыва: {commentElement.date}</legend>
            <h5>Представим что это имя пользователя: {commentElement.id}</h5>
            <p>{commentElement.body}</p>
          </fieldset>
        </div>)}
        <div className={classes.sendNewCommentBox}>
          <form
            className={classes.formSendNewComment}
            onSubmit={(event) => props.sendNewComment(event)}>
            <h4>Оставь свой отзыв:</h4>
            <input />
            <button>отправить</button>
          </form>
        </div>
      </div>
    </div>
  }
  return (<Auxiliary>
    {stripFooter}
  </Auxiliary>

  )
}
export default StripFooter;