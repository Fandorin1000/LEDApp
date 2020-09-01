import React from 'react';
import classes from './SearchForm.module.scss';
import { Formik, Form, Field } from 'formik';



const SearchForm = props => {
  const validateSearchInputHandler = value => {
    let error
    if (!value || value.trim().length === 0) {
      error = 'Не может быть пустым'
    } else if (value.trim().length < 2) {
      error = 'Длинна должна быть не менее 2 символов'
    }
    return error;
  }

  return (
    <div className={classes.searchFormBox}>
      <Formik
        initialValues={{ searchInput: "" }}
        onSubmit={values => {
          console.log(values)
        }}>
        {({ errors }) => (
          <Form
            className={classes.searchForm}>
            <div className={classes.searchFormInner}>
              <Field
                id="searchInput"
                type="text"
                name="searchInput"
                placeholder="Что ищем?"
                validate={validateSearchInputHandler}
              />
              <button type="submit">искать</button>
            </div>
            {errors.searchInput &&
              <div className={classes.errorMessageBox}><span>{errors.searchInput}</span></div>}
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default SearchForm;