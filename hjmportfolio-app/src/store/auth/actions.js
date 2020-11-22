import jwtDecode from 'jwt-decode';
import API from '../../API';

import {
  SET_USER,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SILENT_REFRESH,
  RESET_FAILURE,
  RESET_SUCCESS,
} from '../actionTypes';
import { shouldLoad } from '../_utils';

export const saveUser = (user) => async (dispatch, getState) => {
  const {
    auth: { accessToken },
  } = getState();
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authentication: accessToken,
    },
  };
  if (user.id !== null) {
    const updatedUser = await API.put(`/auth/${user.id}`, user, config);
    dispatch({ type: SET_USER, user: { ...user, ...updatedUser } });
  } else {
    const newUser = await API.post('/auth', config);
    dispatch({ type: SET_USER, user: { ...user, ...newUser } });
  }
};

export const createUser = (user) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS',
    },
  };
  const newUser = await API.post('/auth/signup', user, config);
  dispatch({ type: SIGNUP_REQUEST });
  if (newUser) {
    dispatch({ type: SIGNUP_SUCCESS });
  } else {
    dispatch({ type: SIGNUP_FAILURE });
  }
};

export const authUser = (credentials) => async (dispatch) => {
  const { email, password } = credentials;
  dispatch({ type: LOGIN_REQUEST });
  await API.post('/auth/login', {
    email,
    password,
  })
    .then((res) => {
      if (res.errorMessage) {
        const { errorMessage } = res;
        setTimeout(() => {
          dispatch({
            type: LOGIN_FAILURE,
            errorMessage,
          });
        }, 5000);
      } else {
        const { refreshToken, token, authenticated } = res;
        localStorage.setItem('refreshToken', refreshToken);
        const data = {
          token,
          authenticated,
          user: { ...jwtDecode(token) },
        };
        setTimeout(
          dispatch({
            type: LOGIN_SUCCESS,
            data,
          }),
          5000
        );
      }
    })
    .catch(() => {
      setTimeout(() => {
        dispatch({
          type: LOGIN_FAILURE,
          errorMessage: 'Something went wrong',
        });
      }, 5000);
    });
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('refreshToken');
  dispatch({ type: LOGOUT });
};

export const silentRefresh = () => async (dispatch, getState) => {
  const token = localStorage.getItem('refreshToken');
  console.log('trying to refresh');
  const {
    auth: { silentRefreshAt },
  } = getState();
  const config = {
    refreshToken: token,
  };
  if (!shouldLoad(silentRefreshAt)) return;
  if (!token) return;
  await API.post('/auth/refresh_token', config)
    .then((res) => {
      const { newRefreshToken, newAccessToken, authenticated } = res;
      localStorage.setItem('refreshToken', newRefreshToken);
      const data = {
        token: newAccessToken,
        authenticated,
        user: { ...jwtDecode(newAccessToken) },
      };
      dispatch({
        type: SILENT_REFRESH,
        data,
      });
    })
    .catch(() => {
      dispatch({
        type: LOGIN_FAILURE,
        errorMessage: null,
      });
    });
};

export const forgotPassword = (credentials) => async (dispatch) => {
  const { email } = credentials;
  await API.post('/auth/forgot_password', { email })
    .then((res) => {
      const { successMessage } = res;
      dispatch({
        type: RESET_SUCCESS,
        successMessage,
      });
    })
    .catch(() => {
      dispatch({
        type: RESET_FAILURE,
        errorMessage: 'An error occurred',
      });
    });
};

export const resetPassword = (data) => async (dispatch) => {
  const { password, userId, token } = data;
  await API.post('/auth/reset_password', { password, userId, token })
    .then((res) => {
      const { successMessage } = res;
      dispatch({
        type: RESET_SUCCESS,
        successMessage,
      });
    })
    .catch(() => {
      dispatch({
        type: RESET_FAILURE,
        errorMessage: 'An error occurred',
      });
    });
};
