import React from 'react';
import classes from './OrderForm.module.scss';
import { Formik, Form, Field } from 'formik';
import Auxiliary from '../../../hoc/Auxiliary';
import Spinner from '../../UI/Spinner/Spinner';

const OrderForm = props => {
  const { sendOrder, bagArray, isWaitSendOrderData } = props;
  const validateUserEnteredData = value => {
    let error;
    if (!value) {
      error = 'Обязательно к заполнению!'
    } else if (value.trim().length < 3) {
      error = 'Длинна должна быть не менее 3 символов'
    } else if (value.trim().length > 250) {
      error = `Ууух и настрочили, не более 250 символов должно быть!
      Сейчас: ${value.length} символов.`
    }
    return error;
  }
  const validateUserEnteredInTextarea = value => {
    let error;
    if (!value) {
      return error;
    } else if (value.trim().length < 3) {
      error = 'Длинна должна быть не менее 3 символов'
    } else if (value.trim().length > 250) {
      error = `Ууух и настрочили, не более 250 символов должно быть!
      Сейчас: ${value.length} символов.`
    }
    return error;
  }
  const validateUserEnteredNumber = value => {
    let error;
    const enteredValue = String(value).split('').length;
    if (enteredValue === 0) {
      error = 'Обязательно к заполнению!'
    } else if (enteredValue < 8) {
      error = 'Длинна должна быть не менее 8 символов'
    } else if (enteredValue > 13) {
      error = `Ууух и настрочили, не более 13 символов должно быть!
      Сейчас: ${enteredValue} символов.`
    }
    return error;
  }
  return (
    <Auxiliary>
      {isWaitSendOrderData ? <Spinner /> : <Formik
        initialValues={{ clientName: "", clientSurname: "", clientAdres: "", clientMessage: "", clientNumber: "" }}
        onSubmit={values => {
          const id = (Math.random() * 10000000000) / (Math.random() * 12257821221)
          const newOrderData = {
            date: `date: ${new Date().toLocaleDateString()}, time: ${new Date().toLocaleTimeString()}`,
            id: id,
            clientName: values.clientName,
            clientSurname: values.clientSurname,
            clientAdres: values.clientAdres,
            clientNumber: values.clientNumber,
            clientMessage: values.clientMessage,
            orderProducts: bagArray
          }
          sendOrder(newOrderData);
          values.clientName = '';
          values.clientSurname = '';
          values.clientAdres = '';
          values.clientNumber = '';
          values.clientMessage = '';
        }}>
        {({ errors, touched }) => (
          <Form
            className={classes.formSendNewComment}>
            <div className={classes.formBox}>
              <div className={classes.formItem}>
                <div><label htmlFor="clientName">Имя:</label></div>
                <div>
                  <Field
                    id="clientName"
                    type="text"
                    name="clientName"
                    placeholder="Ваше имя"
                    validate={validateUserEnteredData}
                    required
                  />
                </div>
                {errors.clientName && touched.clientName && <div className={classes.errorMessageBox}><span>{errors.clientName}</span></div>}
              </div>
              <div className={classes.formItem}>
                <div><label htmlFor="clientSurname">Фамилия:</label></div>
                <div>
                  <Field
                    id="clientSurname"
                    type="text"
                    name="clientSurname"
                    placeholder="Ваше имя"
                    validate={validateUserEnteredData}
                    required
                  />
                </div>
                {errors.clientSurname && touched.clientSurname && <div className={classes.errorMessageBox}><span>{errors.clientSurname}</span></div>}
              </div>
              <div className={classes.formItem}>
                <div><label htmlFor="clientAdres">Адрес доставки (или отделение почты):</label></div>
                <div>
                  <Field
                    id="clientAdres"
                    type="text"
                    name="clientAdres"
                    placeholder="Адрес"
                    validate={validateUserEnteredData}
                    required
                  />
                </div>
                {errors.clientAdres && touched.clientAdres && <div className={classes.errorMessageBox}><span>{errors.clientAdres}</span></div>}
              </div>
              <div className={classes.formItem}>
                <div><label htmlFor="clientNumber">Номер телефона:</label></div>
                <div>
                  <Field
                    id="clientNumber"
                    type="number"
                    name="clientNumber"
                    placeholder="Ваш номер телефона"
                    validate={validateUserEnteredNumber}
                    required
                  />
                </div>
                {errors.clientNumber && touched.clientNumber && <div className={classes.errorMessageBox}><span>{errors.clientNumber}</span></div>}
              </div>
              <div className={classes.formItem}>
                <div><label htmlFor="clientMessage">Дополнительно:</label></div>
                <div>
                  <Field
                    rows="8"
                    id="clientMessage"
                    as="textarea"
                    name="clientMessage"
                    placeholder="Дополнительные пожелания"
                    validate={validateUserEnteredInTextarea}
                  />
                </div>
                {errors.clientMessage && touched.clientMessage && <div className={classes.errorMessageBox}><span>{errors.clientMessage}</span></div>}
              </div>
            </div>
            <button type="submit">отправить</button>
          </Form>
        )}
      </Formik>}
    </Auxiliary>
  )
}
export default OrderForm;