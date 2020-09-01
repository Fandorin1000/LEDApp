import React from 'react';
import classes from './StripRatingForm.module.scss';
import { Formik, Form, Field } from 'formik';
import Auxiliary from '../../../hoc/Auxiliary';

const StripRatingForm = props => {
  const { ratingArray, sendNewRatingNumber, isWaitSendNewRatingNumber } = props;
  const ratingSum = ratingArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const ratingRender = ratingSum / ratingArray.length;

  return (
    <Auxiliary>
      <Formik
        initialValues={{ newRatingNumber: "" }}
        onSubmit={(values, e) => {
          sendNewRatingNumber(values.newRatingNumber)
        }
        }>
        {({ submitForm,
          handleChange,
          values: { newRatingNumber }
        }) => (
            <Form
              className={classes.formSendNewRating}>
              <div>
                <h2>Рейтинг</h2>
                {ratingArray.length > 0 ?
                  <span>Текущая оценка товара: <b>{ratingRender.toFixed(1)}</b> из 5
                    <br /><span>Всего оценок: {ratingArray.length}</span>
                  </span> :
                  <span>Ещё нет оценок этого товара</span>}
              </div>
              <div>
                <span>Поставьте свою оценку товару: </span>
                {isWaitSendNewRatingNumber ?
                  <div className={classes.spinnerWrapper}><span>Sending request... please wait...</span></div> :
                  null}
                <Field
                  id="newRatingNumber"
                  as="select"
                  name="newRatingNumber"
                  value={newRatingNumber}
                  onChange={(e) => {
                    handleChange(e)
                    submitForm()
                  }
                  }>
                  <option value="1" >1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Field>
              </div>
            </Form>
          )}
      </Formik>
    </Auxiliary>
  )
}
export default StripRatingForm;