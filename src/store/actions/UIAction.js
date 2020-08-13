import * as actionTypes from './actionTypes';
import * as actions from './index';

export const toggleIsLoading = (payload) => ({ type: actionTypes.TOGGLE_IS_LOADING, payload });
export const setError = (payload) => ({ type: actionTypes.SET_ERROR, error: payload });
export const clearError = () => ({ type: actionTypes.CLEAR_ERROR, error: null });
export const toggleIsWaitGetStrip = (payload) => ({ type: actionTypes.TOGGLE_IS_WAIT_GET_STRIP, payload });
export const toggleIsShowBackdrop = (payload) => ({ type: actionTypes.TOGGLE_IS_SHOW_BACKDROP, payload });
export const toggleIsShowSideDrawer = (payload) => ({ type: actionTypes.TOGGLE_IS_SHOW_SIDE_DRAWER, payload });


//export const openSideDrawer = () => ({ type: actionTypes.OPEN_SIDE_DRAWER})

export const openSideDrawer = () => async dispatch => {
  try {
    await dispatch(toggleIsShowBackdrop(true));
    await dispatch(toggleIsShowSideDrawer(true));
  } catch (error) {
    await dispatch(toggleIsShowBackdrop(false));
    await dispatch(toggleIsShowSideDrawer(false));
    await dispatch(actions.setError(error.message))
  }
}