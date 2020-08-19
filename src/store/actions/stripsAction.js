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
    const response = await stripsAPI.getStrip(id);
    await dispatch(getStripRequestSuccess(response));
    await dispatch(actions.toggleIsWaitGetStrip(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitGetStrip(false));
    await dispatch(actions.setError(error.message));
  }
}
//sorted start
export const sortedStripsStartLowPrice = () => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitSort(true));
    const response = await stripsAPI.getStrips();
    const sortedStrips = await response.sort((a, b) => a.price - b.price);
    await dispatch(getStripsRequestSuccess(sortedStrips));
    await dispatch(actions.toggleIsWaitSort(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitSort(false));
    await dispatch(actions.setError(error.message));
  }
}
export const sortedStripsStartHighPrice = () => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitSort(true));
    const response = await stripsAPI.getStrips();
    const sortedStrips = await response.sort((a, b) => a.price > b.price);
    await dispatch(getStripsRequestSuccess(sortedStrips));
    await dispatch(actions.toggleIsWaitSort(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitSort(false));
    await dispatch(actions.setError(error.message));
  }
}
export const sortedStripsStartHighPower = () => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitSort(true));
    const response = await stripsAPI.getStrips();
    const sortedStrips = await response.sort((a, b) => b.characteristics.power - a.characteristics.power);
    await dispatch(getStripsRequestSuccess(sortedStrips));
    await dispatch(actions.toggleIsWaitSort(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitSort(false));
    await dispatch(actions.setError(error.message));
  }
}
export const sortedStripsStartLowPower = () => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitSort(true));
    const response = await stripsAPI.getStrips();
    const sortedStrips = await response.sort((a, b) => a.characteristics.power - b.characteristics.power);
    await dispatch(getStripsRequestSuccess(sortedStrips));
    await dispatch(actions.toggleIsWaitSort(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitSort(false));
    await dispatch(actions.setError(error.message));
  }
}
//sorted end
