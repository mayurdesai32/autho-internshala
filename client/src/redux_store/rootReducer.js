import { combineReducers } from 'redux';

import { userLoginReducer } from './autho/reducer';
import {
  userCreateReducer,
  getAllUsersReducer,
  deleteUserReducer,
} from './user/userReducer';
const rootReducer = combineReducers({
  Login: userLoginReducer,
  createUser: userCreateReducer,
  allUser: getAllUsersReducer,
  deleteUser: deleteUserReducer,
});

export default rootReducer;
