import * as TYPES from './ActionTypes';
import * as api from '../../services/api';

export const generateLink = (action) => async (dispatch) => {
  const result = await api.post('/user/link', { action });

  dispatch({ type: TYPES.GENERATE_LINK, payload: result ? result.data : null });

  return result ? result.data : null;
};

export const getLink = (id) => async (dispatch) => {
  const result = await api.get(`/user/link/${id}`);

  dispatch({ type: TYPES.GET_LINK, payload: result ? result.data : null });

  return result ? result.data : null;
};
