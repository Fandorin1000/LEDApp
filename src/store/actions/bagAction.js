import * as actionTypes from './actionTypes';
import * as actions from './index';

export const addToBagProduct = (payload) => ({ type: actionTypes.ADD_TO_BAG_PRODUCT, payload });



export const addToBagProductStart = product => async dispatch => {
  const newProduct = {
    ...product,
  }
  try {
    console.log(newProduct)
    await dispatch(addToBagProduct(newProduct))
  } catch (error) {
    await (dispatch(actions.setError(error.message)))
  }
}




