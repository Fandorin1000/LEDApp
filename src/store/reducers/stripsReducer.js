import * as actionTypes from '../../store/actions/actionTypes';
import { updatedObject } from '../../shared/updatedObject';

const initialState = {
  strips: null,
  strip: null
}

const setStrips = (state, action) => updatedObject(state, { strips: action.payload });
const setStrip = (state, action) => updatedObject(state, { strip: action.payload })

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STRIPS: return setStrips(state, action)
    case actionTypes.SET_STRIP: return setStrip(state, action)
    default: return state;
  }
}

export default reducer;