import * as actionTypes from './actionTypes';
import { stripsAPI } from '../../shared/API';
import * as actions from './index';

export const getStripsRequestSuccess = (payload) => ({ type: actionTypes.SET_STRIPS, payload });
export const getStripRequestSuccess = (payload) => ({ type: actionTypes.SET_STRIP, payload });

export const getStripsRequest = () => async dispatch => {
  await dispatch(actions.clearError())
  await dispatch(actions.toggleIsLoading(true))
  try {
    const response = await stripsAPI.getStrips()
    console.log(response)
    await dispatch(getStripsRequestSuccess(response))
    dispatch(actions.toggleIsLoading(false))
  } catch (error) {
    await dispatch(actions.toggleIsLoading(false))
    await dispatch(actions.setError(error.message))
  }
}

export const getStripRequest = id => async dispatch => {
  await dispatch(actions.clearError());
  await dispatch(actions.toggleIsWaitGetStrip(true));
  try {
    const response = await stripsAPI.getStrip(id)
    await dispatch(getStripRequestSuccess(response))
    await dispatch(actions.toggleIsWaitGetStrip(false));
    console.log(response);
  } catch (error) {
    await dispatch(actions.toggleIsWaitGetStrip(false));
    await dispatch(actions.setError(error.message))
  }
}

