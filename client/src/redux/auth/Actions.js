import * as TYPES from './ActionTypes';
import * as api from '../../services/api';
import {
  GET_DIAGNOSTIC_DATE,
  GET_EVIDENCE_DATE,
  GET_EXAMINATION_DATE,
  POST_DIAGNOSTIC_DATE,
  POST_EVIDENCE_DATE,
} from './ActionTypes';

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

export const getdiagnostic = () => async (dispatch) => {
  const result = await api.get('/user/diagnostic');

  dispatch({ type: TYPES.GET_DIAGNOSTIC_DATE, payload: result ? result.data : null });

  return result ? result.data : null;
};

export const creatediagnostic = (params) => async (dispatch) => {
  const result = await api.post('/user/diagnostic', params);

  dispatch({ type: TYPES.POST_DIAGNOSTIC_DATE, payload: result ? result.data : null });

  return result ? result.data : null;
};

export const getEvidence = () => async (dispatch) => {
  const result = await api.get('/user/evidence');

  dispatch({ type: TYPES.GET_EVIDENCE_DATE, payload: result ? result.data : null });

  return result ? result.data : null;
};

export const createEvidence = (params) => async (dispatch) => {
  const result = await api.post('/user/evidence', params);

  dispatch({ type: TYPES.POST_EVIDENCE_DATE, payload: result ? result.data : null });

  return result ? result.data : null;
};
