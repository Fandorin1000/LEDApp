import * as actionTypes from './actionTypes';
import { stripsAPI } from '../../shared/API';
import * as actions from './index';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
export const getStripsRequestSuccess = (payload) => ({ type: actionTypes.SET_STRIPS, payload });
export const getStripRequestSuccess = (payload) => ({ type: actionTypes.SET_STRIP, payload });


export const getStripsRequest = () => async dispatch => {
  await dispatch(actions.clearError())
  await dispatch(actions.toggleIsLoading(true))
  await dispatch(getStripsRequestSuccess(null))
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
    await dispatch(scrollToTop())
  } catch (error) {
    await dispatch(actions.toggleIsWaitGetStrip(false));
    await dispatch(actions.setError(error.message));
  }
}

export const setNewComment = (index, comObj) => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitGetNewComment(true))
    const response = await stripsAPI.setNewComment(index, comObj);
    const stripResponse = await stripsAPI.getStrip(index);
    await dispatch(getStripRequestSuccess(stripResponse));
    await dispatch(actions.toggleIsWaitGetNewComment(false))
  } catch (error) {
    await dispatch(actions.toggleIsWaitGetNewComment(false))
    await dispatch(actions.setError(error.message));
  }
}

//sorted start
export const sortedStripsStartLowPrice = (strips) => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitSort(true));
    const sortedStrips = await strips.sort((a, b) => a.price - b.price);
    await dispatch(getStripsRequestSuccess(sortedStrips));
    await dispatch(actions.toggleIsWaitSort(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitSort(false));
    await dispatch(actions.setError(error.message));
  }
}
export const sortedStripsStartHighPrice = (strips) => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitSort(true));
    const sortedStrips = await strips.sort((a, b) => b.price - a.price);
    await dispatch(getStripsRequestSuccess(sortedStrips));
    await dispatch(actions.toggleIsWaitSort(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitSort(false));
    await dispatch(actions.setError(error.message));
  }
}
export const sortedStripsStartHighPower = (strips) => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitSort(true));
    const sortedStrips = await strips.sort((a, b) => b.characteristics.power - a.characteristics.power);
    await dispatch(getStripsRequestSuccess(sortedStrips));
    await dispatch(actions.toggleIsWaitSort(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitSort(false));
    await dispatch(actions.setError(error.message));
  }
}
export const sortedStripsStartLowPower = (strips) => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitSort(true));
    const sortedStrips = await strips.sort((a, b) => a.characteristics.power - b.characteristics.power);
    await dispatch(getStripsRequestSuccess(sortedStrips));
    await dispatch(actions.toggleIsWaitSort(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitSort(false));
    await dispatch(actions.setError(error.message));
  }
}
//sorted end
//filtered start
export const filteredTwelveVolts = (strips) => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitSort(true));
    const sortedStrips = await strips.filter(element => element.characteristics.voltage === 12);
    await dispatch(getStripsRequestSuccess(sortedStrips));
    await dispatch(actions.toggleIsWaitSort(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitSort(false));
    await dispatch(actions.setError(error.message));
  }
}
export const filteredTwentyFourVolts = (strips) => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitSort(true));
    const sortedStrips = await strips.filter(element => element.characteristics.voltage === 24);
    await dispatch(getStripsRequestSuccess(sortedStrips));
    await dispatch(actions.toggleIsWaitSort(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitSort(false));
    await dispatch(actions.setError(error.message));
  }
}
export const filteredWarmLight = (strips) => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitSort(true));
    const sortedStrips = await strips.filter(element => element.characteristics.lighttemperature === 3000);
    await dispatch(getStripsRequestSuccess(sortedStrips));
    await dispatch(actions.toggleIsWaitSort(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitSort(false));
    await dispatch(actions.setError(error.message));
  }
}
export const filteredNeutralLight = (strips) => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitSort(true));
    const sortedStrips = await strips.filter(element => element.characteristics.lighttemperature === 4000);
    await dispatch(getStripsRequestSuccess(sortedStrips));
    await dispatch(actions.toggleIsWaitSort(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitSort(false));
    await dispatch(actions.setError(error.message));
  }
}
export const filteredColdLight = (strips) => async dispatch => {
  try {
    await dispatch(actions.toggleIsWaitSort(true));
    const sortedStrips = await strips.filter(element => element.characteristics.lighttemperature === 6000);
    await dispatch(getStripsRequestSuccess(sortedStrips));
    await dispatch(actions.toggleIsWaitSort(false));
  } catch (error) {
    await dispatch(actions.toggleIsWaitSort(false));
    await dispatch(actions.setError(error.message));
  }
}
//filtered end
