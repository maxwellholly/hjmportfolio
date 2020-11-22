import API from '../../API';
import {
  SET_USER_ASKS,
  SET_AVAILABLE_ASKS,
  SET_USER_ASKS_TODO,
  SET_ASK,
  REMOVE_ASK,
} from '../actionTypes';
import { shouldLoad } from '../_utils';

export const fetchAvailableAsks = (categoryId) => async (
  dispatch,
  getState
) => {
  const {
    auth: { accessToken },
    asks: {
      availableHomeAsksLoadedAt,
      availableShoppingAsksLoadedAt,
      availableAssemblyAsksLoadedAt,
      availableMiscAsksLoadedAt,
    },
    categories: { category },
  } = getState();
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authentication: accessToken,
    },
  };
  /* eslint-disable */
  if (category.name === 'Home Maintenance') {
    console.log('made it here');
    if (!shouldLoad(availableHomeAsksLoadedAt)) return;
  } else if (category.name === 'Shopping') {
    if (!shouldLoad(availableShoppingAsksLoadedAt)) return;
  } else if (category.name === 'Item Assembly/Mounting') {
    if (!shouldLoad(availableAssemblyAsksLoadedAt)) return;
  } else {
    if (!shouldLoad(availableMiscAsksLoadedAt)) return;
  }
  /* eslint-enable */
  const asks = await API.get(`/asks?categoryId=${categoryId}`, config);
  const data = { asks, category };
  dispatch({ type: SET_AVAILABLE_ASKS, data });
};

export const fetchUserAsks = (userId) => async (dispatch, getState) => {
  const {
    auth: { accessToken },
  } = getState();
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authentication: accessToken,
    },
    params: {
      askerId: userId,
    },
  };
  const asks = await API.get(`/asks/myasks`, config);
  if (asks.length > 0) {
    dispatch({ type: SET_USER_ASKS, asks });
  }
};

export const fetchUserAsksTodo = (userId) => async (dispatch, getState) => {
  const {
    asks: { userAsksTodoLoadedAt },
    auth: { accessToken },
  } = getState();
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authentication: accessToken,
    },
    params: {
      workerId: userId,
    },
  };
  if (!shouldLoad(userAsksTodoLoadedAt)) return;
  const asks = await API.get(`/asks/mytodos`, config);
  console.log(asks);
  if (asks.length > 0) {
    dispatch({ type: SET_USER_ASKS_TODO, asks });
  }
};

export const fetchAsk = (id) => async (dispatch) => {
  const ask = await API.get(`/asks/${id}`);
  dispatch({ type: SET_ASK, ask });
};

export const deleteAsk = (id) => async (dispatch, getState) => {
  const {
    auth: { accessToken, currentUser },
  } = getState();
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authentication: accessToken,
    },
  };
  await API.delete(`/asks/${id}`, config);
  dispatch({ type: REMOVE_ASK, id });
  fetchUserAsks(currentUser.id);
};

export const saveAsk = (ask) => async (dispatch, getState) => {
  const {
    auth: { accessToken },
  } = getState();
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authentication: accessToken,
    },
  };
  if (ask.id) {
    const updatedAsk = await API.put(`/asks/${ask.id}`, ask, config);
    dispatch({ type: SET_ASK, ask: { ...ask, ...updatedAsk } });
  } else {
    await API.post('/asks', ask, config);
    dispatch({ type: SET_ASK, ask });
  }
};

export const acceptAsk = (ask, userId) => async (dispatch) => {
  const updatedAsk = await API.put(`/asks/${ask.id}`, {
    ask: { ...ask, workerId: userId },
  });
  dispatch({ type: SET_ASK, ask: { ...ask, ...updatedAsk } });
};
