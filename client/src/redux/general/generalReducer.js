import * as TYPES from './ActionTypes';

const initialState = {
  globalLoading: false,
};

export function generalReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case TYPES.SET_GLOBAL_LOADING:
      return { ...state, globalLoading: payload };
    default:
      return state;
  }
}
