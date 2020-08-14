import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/updatedObject';

const initialState = {
  bagArray: []
}

const addToBagProduct = (state, action) => updatedObject(state, { bagArray: state.bagArray.concat(action.payload) });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.ADD_TO_BAG_PRODUCT): return addToBagProduct(state, action);
    default: return state;
  }
}
export default reducer;