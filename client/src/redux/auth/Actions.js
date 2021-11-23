import * as TYPES from './ActionTypes';
import * as api from '../../services/api';
import { GET_EXAMINATION_DATE } from './ActionTypes';

export const logIn = (email, password) => async (dispatch) => {
  const result = await api.post('/auth/login', { email, password });

  dispatch({ type: TYPES.LOG_IN, payload: result ? result.data : null });

  return result ? result.data : null;
};

export const register = (params) => async (dispatch) => {
  const result = await api.post('/auth/register', params);

  dispatch({ type: TYPES.LOG_IN, payload: result ? result.data : null });

  return result ? result.data : null;
};

export const getLoggedUser = () => async (dispatch) => {
  const result = await api.get('/user');

  dispatch({ type: TYPES.GET_LOGGED_USER, payload: result ? result.data : null });

  return result ? result.data : null;
};

export const getExaminationDate = () => async (dispatch) => {
  const result = await api.get('/user/ExaminationDate');

  dispatch({ type: TYPES.GET_EXAMINATION_DATE, payload: result ? result.data : null });

  return result ? result.data : null;
};

export const createExaminationDate = (params) => async (dispatch) => {
  const result = await api.post('/user/ExaminationDate', params);

  dispatch({ type: TYPES.POST_EXAMINATION_DATE, payload: result ? result.data : null });

  return result ? result.data : null;
};
