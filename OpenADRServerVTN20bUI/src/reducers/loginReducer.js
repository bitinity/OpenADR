import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

import { config } from '../store/configureStore';


// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function loginReducer( state = initialState.user, action ) {
  let newState;

  switch (action.type) {

  	case types.LOGIN_USER:
      return state;

    case types.LOGIN_USER_SUCCESS:
      action.payload.isConnected = true;
      action.payload.isConnectionPending = false;
      config.user = action.payload;
      newState = objectAssign( {}, {}, action.payload );
      return newState;

    case types.LOGIN_USER_ERROR:
      return state;

    default:
      return state;
  }
}