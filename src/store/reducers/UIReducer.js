import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/updatedObject';

const initialState = {
  isLoading: false,
  error: null,
  isWaitGetStrip: false,
  isShowBackdrop: null,
  isShowSideDrawer: false,
  isWaitSort: false,
  isWaitGetNewComment: false,
  isShowSortList: false,
  isShowFilterList: false,
  isShowOrderSuccessModal: false,
  isWaitSendOrderData: false
}

const toggleIsLoading = (state, action) => updatedObject(state, { isLoading: action.payload });
const setError = (state, action) => updatedObject(state, { error: action.payload });
const clearError = (state) => updatedObject(state, { error: null });
const toggleIsWaitGetStrip = (state, action) => updatedObject(state, { isWaitGetStrip: action.payload });
const toggleIsShowBackdrop = (state, action) => updatedObject(state, { isShowBackdrop: action.payload });
const toggleIsShowSideDrawer = (state, action) => updatedObject(state, { isShowSideDrawer: action.payload });
const toggleIsWaitSort = (state, action) => updatedObject(state, { isWaitSort: action.payload });
const toggleIsWaitGetNewComment = (state, action) => updatedObject(state, { isWaitGetNewComment: action.payload });
const toggleIsShowSortList = (state) => updatedObject(state, { isShowSortList: !state.isShowSortList });
const toggleIsShowFilterList = (state) => updatedObject(state, { isShowFilterList: !state.isShowFilterList });
const toggleIsShowOrderSuccess = (state, action) => updatedObject(state, { isShowOrderSuccessModal: action.payload });
const toggleIsWaitSendOrderData = (state, action) => updatedObject(state, { isWaitSendOrderData: action.payload });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.TOGGLE_IS_LOADING): return toggleIsLoading(state, action);
    case (actionTypes.SET_ERROR): return setError(state, action);
    case (actionTypes.CLEAR_ERROR): return clearError(state);
    case (actionTypes.TOGGLE_IS_WAIT_GET_STRIP): return toggleIsWaitGetStrip(state, action);
    case (actionTypes.TOGGLE_IS_SHOW_BACKDROP): return toggleIsShowBackdrop(state, action);
    case (actionTypes.TOGGLE_IS_SHOW_SIDE_DRAWER): return toggleIsShowSideDrawer(state, action);
    case (actionTypes.TOGGLE_IS_WAIT_SORT): return toggleIsWaitSort(state, action);
    case (actionTypes.TOGGLE_IS_WAIT_GET_NEW_COMMENT): return toggleIsWaitGetNewComment(state, action);
    case (actionTypes.TOGGLE_IS_SHOW_SORT_LIST): return toggleIsShowSortList(state, action)
    case (actionTypes.TOGGLE_IS_SHOW_FILTER_LIST): return toggleIsShowFilterList(state, action)
    case (actionTypes.TOGGLE_IS_SHOW_ORDER_SUCCESS_MODAL): return toggleIsShowOrderSuccess(state, action);
    case (actionTypes.TOGGLE_IS_WAIT_SEND_ORDER_DATA): return toggleIsWaitSendOrderData(state, action);
    default: return state;
  }
}
export default reducer;