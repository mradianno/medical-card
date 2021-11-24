import * as TYPES from './ActionTypes';
import { GET_EVIDENCE_DATE, GET_EXAMINATION_DATE } from './ActionTypes';

const initialState = {
  token: null,
  userId: null,
  user: null,
  examinationDate: null,
  diagnostic: null,
  evidence: null,
};

export function authReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case TYPES.GET_LOGGED_USER:
      return { ...state, user: payload };
    case TYPES.GET_EXAMINATION_DATE:
      return { ...state, examinationDate: payload };
    case TYPES.GET_DIAGNOSTIC_DATE:
      return { ...state, diagnostic: payload };
    case TYPES.GET_EVIDENCE_DATE:
      return { ...state, evidence: payload };
    default:
      return state;
  }
}
