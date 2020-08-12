import * as actionTypes from './actionTypes';

export const toggleIsLoading = (payload) => ({ type: actionTypes.TOGGLE_IS_LOADING, payload });
export const setError = (payload) => ({ type: actionTypes.SET_ERROR, error: payload });
export const clearError = () => ({ type: actionTypes.CLEAR_ERROR, error: null });
export const toggleIsWaitGetStrip = (payload) => ({ type: actionTypes.TOGGLE_IS_WAIT_GET_STRIP, payload })