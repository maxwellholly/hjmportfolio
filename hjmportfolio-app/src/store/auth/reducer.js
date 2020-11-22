import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actionTypes';

const startState = {
  isAuthenticating: false,
  currentUser: {},
  accessToken: null,
  errorMessage: null,
  successMessage: null,
  userLoadedAt: 0,
  loggedIn: false,
};

export default function userReducer(state = startState, action) {
  const { type, ...payload } = action;

  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isAuthenticating: true,
      };
    }
    case LOGIN_FAILURE: {
      const { errorMessage } = payload;
      return {
        ...state,
        isAuthenticating: false,
        errorMessage,
        loggedIn: false,
      };
    }
    case LOGIN_SUCCESS: {
      const { data } = payload;
      const { user, authenticated, token } = data;
      return {
        ...state,
        isAuthenticating: false,
        currentUser: user,
        loggedIn: authenticated,
        accessToken: token,
        userLoadedAt: Date.now(),
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isAuthenticating: false,
        currentUser: null,
        errorMessage: null,
        loggedIn: false,
        accessToken: null,
      };
    }
    default:
      return state;
  }
}
