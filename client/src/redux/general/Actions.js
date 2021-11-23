import * as TYPES from './ActionTypes';

export const setGlobalLoading = (loadingState) => async (dispatch) => {
  dispatch({ type: TYPES.SET_GLOBAL_LOADING, payload: loadingState });
};
