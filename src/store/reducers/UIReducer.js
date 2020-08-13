import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/updatedObject';

const initialState = {
  isLoading: false,
  error: null,
  isWaitGetStrip: false,
  isShowBackdrop: null,
  isShowSideDrawer: false
}

const toggleIsLoading = (state, action) => updatedObject(state, { isLoading: action.payload });
const setError = (state, action) => updatedObject(state, { error: action.payload });
const clearError = (state) => updatedObject(state, { error: null });
const toggleIsWaitGetStrip = (state, action) => updatedObject(state, { isWaitGetStrip: action.payload });
const toggleIsShowBackdrop = (state, action) => updatedObject(state, { isShowBackdrop: action.payload });
const toggleIsShowSideDrawer = (state, action) => updatedObject(state, { isShowSideDrawer: action.payload });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.TOGGLE_IS_LOADING): return toggleIsLoading(state, action);
    case (actionTypes.SET_ERROR): return setError(state, action);
    case (actionTypes.CLEAR_ERROR): return clearError(state);
    case (actionTypes.TOGGLE_IS_WAIT_GET_STRIP): return toggleIsWaitGetStrip(state, action);
    case (actionTypes.TOGGLE_IS_SHOW_BACKDROP): return toggleIsShowBackdrop(state, action);
    case (actionTypes.TOGGLE_IS_SHOW_SIDE_DRAWER): return toggleIsShowSideDrawer(state, action);
    default: return state;
  }
}
export default reducer;