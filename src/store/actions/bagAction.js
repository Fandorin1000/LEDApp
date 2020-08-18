import * as actionTypes from './actionTypes';
import * as actions from './index';

export const addToBagProduct = (payload) => ({ type: actionTypes.ADD_TO_BAG_PRODUCT, payload });



export const addToBagProductStart = (bagArray, product) => async dispatch => {
  const bag = [...bagArray];
  const newProduct = {
    ...product,
    amount: 1
  }
  try {
    console.log('work')
    await bag.push(newProduct)
    await localStorage.setItem('bag', JSON.stringify(bag))
    await dispatch(addToBagProduct(newProduct))
  } catch (error) {
    await (dispatch(actions.setError(error.message)))
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
    await (dispatch(actions.setError(error.message)))
  }
}




