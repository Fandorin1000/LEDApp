import * as actionTypes from './actionTypes';
import * as actions from './index';
import { stripsAPI } from '../../shared/API';

export const addToBagProduct = (payload) => ({ type: actionTypes.ADD_TO_BAG_PRODUCT, payload });
export const increasedMetersAndPrice = (id, price) => ({ type: actionTypes.INCREASED_METERS_AND_PRICE, id, price })
export const decreasedMetersAndPrice = (id, price) => ({ type: actionTypes.DECREASED_METERS_AND_PRICE, id, price })
export const deleteElementFromBag = id => ({ type: actionTypes.DELETE_ELEMENT_FROM_BAG, id })
export const clearBag = () => ({ type: actionTypes.CLEAR_BAG })
export const deleteElementFromBagStart = id => async dispatch => {
  try {
    const bag = await JSON.parse(localStorage.getItem('bag'));
    const currentBag = await bag.filter(element => element.id !== id);
    await localStorage.setItem('bag', JSON.stringify(currentBag));
    await dispatch(deleteElementFromBag(id))
  }
  catch (error) {
    await dispatch(actions.setErrorAction(error))
  }
}

export const addToBagProductStart = (bagArray, product) => async dispatch => {
  const bag = [...bagArray];
  const newProduct = {
    ...product,
    amount: 1
  }
  try {
    await bag.push(newProduct)
    await localStorage.setItem('bag', JSON.stringify(bag))
    await dispatch(addToBagProduct(newProduct))
    await alert(`${newProduct.name} добавлен в корзину!`)
  } catch (error) {
    await (dispatch(actions.setErrorAction(error)))
  }
}

export const getProductsFromLS = () => async dispatch => {
  await dispatch(actions.toggleIsLoading(true))
  try {
    const bag = JSON.parse(localStorage.getItem('bag'))
    if (bag) {
      await dispatch(addToBagProduct(bag))
      await dispatch(actions.toggleIsLoading(false))
    }
    await dispatch(actions.toggleIsLoading(false))
  } catch (error) {
    await dispatch(actions.toggleIsLoading(false))
    await (dispatch(actions.setErrorAction(error)))
  }
}
export const sendOrderStartProgress = (orderData) => async dispatch => {
  await dispatch(actions.toggleIsWaitSendOrderData(true));
  try {
    await stripsAPI.sendNewOrder(orderData);
    await dispatch(actions.toggleIsWaitSendOrderData(false));
    await dispatch(actions.toggleIsShowBackdrop(true));
    await dispatch(actions.toggleIsShowOrderSuccessModal(true));
    await setTimeout(() => {
      dispatch(actions.toggleIsShowBackdrop(false));
      dispatch(actions.toggleIsShowOrderSuccessModal(false));
      dispatch(clearBag());
      localStorage.removeItem('bag');
    }, 5000)
  }
  catch (error) {
    await dispatch(actions.toggleIsWaitSendOrderData(false));
    await dispatch(actions.toggleIsShowBackdrop(true));
    await dispatch(actions.setErrorAction(error));
  }
}

