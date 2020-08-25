import React from 'react';
import classes from './FormNewComment.module.scss';
import { Formik, Form, Field } from 'formik';
import Auxiliary from '../../../hoc/Auxiliary';

const FormNewComment = props => {
  const { setNewComment } = props;
  const validateUserCommentHandler = value => {
    let error
    if (!value) {
      error = 'Ну и почему-же передумали?'
    } else if (value.trim().length < 20) {
      error = 'Длинна должна быть не менее 20 символов'
    } else if (value.trim().length > 200) {
      error = `Ууух и настрочили, не более 200 символов должно быть!
      Сейчас: ${value.length} символов.`
    }
    return error;
  }
  return (
    <Auxiliary>
      <Formik
        initialValues={{ userComment: "" }}
        onSubmit={values => {
          const id = (Math.random() * 10000000000) / (Math.random() * 12257821221)
          const commentObj = {
            body: values.userComment,
            id: id,
            date: new Date().toLocaleDateString()
          }
          setNewComment(commentObj)
        }}        >
        {({ errors, touched }) => (
          <Form
            className={classes.formSendNewComment}>

            <div><label htmlFor="userComment">Оставь свой отзыв:</label></div>

            {errors.userComment && touched.userComment &&
              <div className={classes.errorMessageBox}><span>{errors.userComment}</span></div>}
            <Field
              id="userComment"
              as="textarea"
              name="userComment"
              placeholder="Оставь отзыв про опыт использования!"
              rows="8"
              validate={validateUserCommentHandler}
            />
            <button type="submit">отправить</button>
          </Form>
        )}
      </Formik>
    </Auxiliary>
  )
}
export default FormNewComment;