import * as actionTypes from './actionTypes';
import * as actions from './index';

export const toggleIsLoading = (payload) => ({ type: actionTypes.TOGGLE_IS_LOADING, payload });
export const setError = (payload) => ({ type: actionTypes.SET_ERROR, payload });
export const clearError = () => ({ type: actionTypes.CLEAR_ERROR, error: null });
export const toggleIsWaitGetStrip = (payload) => ({ type: actionTypes.TOGGLE_IS_WAIT_GET_STRIP, payload });
export const toggleIsShowBackdrop = (payload) => ({ type: actionTypes.TOGGLE_IS_SHOW_BACKDROP, payload });
export const toggleIsShowSideDrawer = (payload) => ({ type: actionTypes.TOGGLE_IS_SHOW_SIDE_DRAWER, payload });
export const toggleIsWaitSort = (payload) => ({ type: actionTypes.TOGGLE_IS_WAIT_SORT, payload });
export const toggleIsWaitGetNewComment = (payload) => ({ type: actionTypes.TOGGLE_IS_WAIT_GET_NEW_COMMENT, payload });
export const toggleIsShowSortList = () => ({ type: actionTypes.TOGGLE_IS_SHOW_SORT_LIST });
export const toggleIsShowFilterList = () => ({ type: actionTypes.TOGGLE_IS_SHOW_FILTER_LIST });
export const toggleIsShowOrderSuccessModal = (payload) => ({ type: actionTypes.TOGGLE_IS_SHOW_ORDER_SUCCESS_MODAL, payload })
export const toggleIsWaitSendOrderData = (payload) => ({ type: actionTypes.TOGGLE_IS_WAIT_SEND_ORDER_DATA, payload })
export const toggleIsWaitSendNewRatingNumber = (payload) => ({ type: actionTypes.TOGGLE_IS_WAIT_SEND_NEW_RATING_NUMBER, payload })

const toggleIsScrollActive = (isShow) => {
  const body = document.body;
  isShow ?
    body.style.overflow = "hidden" :
    body.style.overflow = "auto"
}

export const setErrorAction = (errorData) => async dispatch => {
  await dispatch(toggleIsShowBackdrop(true))
  await dispatch(actions.setError(errorData))
}
export const closeAllModals = () => async dispatch => {
  try {
    await toggleIsScrollActive(false);
    await dispatch(toggleIsShowBackdrop(false));
    await dispatch(toggleIsShowSideDrawer(false));
    await dispatch(toggleIsShowOrderSuccessModal(false));
    await dispatch(setError(null));
  } catch (error) {
    await dispatch(setErrorAction(error));
  }
};
export const openSideDrawer = () => async dispatch => {
  try {
    await toggleIsScrollActive(true)
    await dispatch(toggleIsShowBackdrop(true));
    await dispatch(toggleIsShowSideDrawer(true));

  } catch (error) {
    await toggleIsScrollActive(false)
    await dispatch(toggleIsShowBackdrop(false));
    await dispatch(toggleIsShowSideDrawer(false));
    await dispatch(setErrorAction(error))
  }
}


