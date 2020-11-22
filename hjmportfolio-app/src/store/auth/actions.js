import jwtDecode from 'jwt-decode';
import API from '../../API';

import {
  SET_USER,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGOUT
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
        const { token, authenticated } = res;
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
  dispatch({ type: LOGOUT });
};
