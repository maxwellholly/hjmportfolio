import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SILENT_REFRESH,
  RESET_SUCCESS,
  RESET_FAILURE,
} from '../actionTypes';

const startState = {
  isAuthenticating: false,
  currentUser: {},
  accessToken: null,
  errorMessage: null,
  successMessage: null,
  userLoadedAt: 0,
  loggedIn: false,
  silentRefreshAt: 0,
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
        silentRefreshAt: Date.now(),
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
    case SIGNUP_REQUEST: {
      return {
        ...state,
      };
    }
    case SIGNUP_FAILURE: {
      const { errorMessage } = payload;
      return {
        ...state,
        errorMessage,
      };
    }
    case RESET_FAILURE: {
      const { errorMessage } = payload;
      return {
        ...state,
        errorMessage,
      };
    }
    case RESET_SUCCESS: {
      const { successMessage } = payload;
      return {
        ...state,
        successMessage,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
      };
    }
    case SILENT_REFRESH: {
      const { data } = payload;
      const { user, authenticated, token } = data;
      return {
        ...state,
        currentUser: user,
        loggedIn: authenticated,
        accessToken: token,
        silentRefreshAt: Date.now(),
        userLoadedAt: Date.now(),
      };
    }
    default:
      return state;
  }
}
