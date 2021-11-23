import { combineReducers } from 'redux';
import { generalReducer } from './general/generalReducer';
import { authReducer } from './auth/authReducer';
import { linkReducer } from './link/linkReducer';

const rootReducer = combineReducers({ authReducer, generalReducer, linkReducer });

export default rootReducer;
