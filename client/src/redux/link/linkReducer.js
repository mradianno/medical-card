import * as TYPES from './ActionTypes';

const initialState = {
  link: null,
  links: [],
};

export function linkReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    default:
      return state;
  }
}
