import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/updatedObject';

const initialState = {
  isLoading: false,
  error: null,
  isWaitGetStrip: false
}

const toggleIsLoading = (state, action) => updatedObject(state, { isLoading: action.payload });
const setError = (state, action) => updatedObject(state, { error: action.payload });
const clearError = (state) => updatedObject(state, { error: null });
const toggleIsWaitGetStrip = (state, action) => updatedObject(state, { isWaitGetStrip: action.payload })
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.TOGGLE_IS_LOADING): return toggleIsLoading(state, action);
    case (actionTypes.SET_ERROR): return setError(state, action);
    case (actionTypes.CLEAR_ERROR): return clearError(state);
    case (actionTypes.TOGGLE_IS_WAIT_GET_STRIP): return toggleIsWaitGetStrip(state, action);
    default: return state;
  }
}
export default reducer;