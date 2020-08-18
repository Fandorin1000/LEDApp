import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/updatedObject';

const initialState = {
  bagArray: []
}

const addToBagProduct = (state, action) => updatedObject(state, { bagArray: state.bagArray.concat(action.payload) });
const increasedMetersAndPrice = (state, action) => updatedObject(state, {
  // ...state.bagArray[action.id - 1].amount++,
  // ...state.bagArray[action.id - 1].currentPrice += action.price
  bagArray: state.bagArray.map((element) => {
    if (element.id === action.id) {
      element.amount++
      element.currentPrice += action.price
    }
    return element
  })

});
const decreasedMetersAndPrice = (state, action) => updatedObject(state, {
  // bagArray: [...state.bagArray],
  // ...state.bagArray[action.id - 1].amount--,
  // ...state.bagArray[action.id - 1].currentPrice -= action.price
  bagArray: state.bagArray.map((element) => {
    if (element.id === action.id) {
      element.amount--
      element.currentPrice -= action.price
    }
    return element
  })
});
const deleteElementFromBag = (state, action) => updatedObject(state, {
  bagArray: state.bagArray.filter(element => element.id !== action.id)
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.ADD_TO_BAG_PRODUCT): return addToBagProduct(state, action);
    case (actionTypes.INCREASED_METERS_AND_PRICE): return increasedMetersAndPrice(state, action);
    case (actionTypes.DECREASED_METERS_AND_PRICE): return decreasedMetersAndPrice(state, action);
    case (actionTypes.DELETE_ELEMENT_FROM_BAG): return deleteElementFromBag(state, action);
    default: return state;
  }
}
export default reducer;