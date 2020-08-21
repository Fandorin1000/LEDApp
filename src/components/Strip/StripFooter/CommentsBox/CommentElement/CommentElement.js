import React from 'react';

const CommentElement = (props) => {
  const { id, date, body } = props;
  return (
    <div key={id}>
      <fieldset>
        <legend>Дата отзыва: {date}</legend>
        <h5>Представим что это имя пользователя: {id}</h5>
        <p>{body}</p>
      </fieldset>
    </div>
  )
}
export default CommentElement;
