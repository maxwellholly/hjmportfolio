import {
  SET_USER_ASKS,
  SET_AVAILABLE_ASKS,
  SET_USER_ASKS_TODO,
  SET_ASK,
  REMOVE_ASK,
} from '../actionTypes';

import { removeIdFromArray } from '../_utils';

const startState = {
  availableAsks: [],
  userAsks: [],
  userAsksTodo: [],
  ask: {},
  availableHomeAsksLoadedAt: 0,
  availableShoppingAsksLoadedAt: 0,
  availableAssemblyAsksLoadedAt: 0,
  availableMiscAsksLoadedAt: 0,
  userAsksLoadedAt: 0,
  userAsksTodoLoadedAt: 0,
};

export default function postsReducer(state = startState, action) {
  const { type, ...payload } = action;

  switch (type) {
    case SET_AVAILABLE_ASKS: {
      const {
        data: { asks, category },
      } = payload;
      /* eslint-disable */
      if (category.name === 'Home Maintenance') {
        console.log('and here');
        return {
          ...state,
          availableAsks: asks,
          availableHomeAsksLoadedAt: Date.now(),
          availableShoppingAsksLoadedAt: 0,
          availableAssemblyAsksLoadedAt: 0,
          availableMiscAsksLoadedAt: 0,
        };
      } else if (category.name === 'Shopping') {
        return {
          ...state,
          availableAsks: asks,
          availableShoppingAsksLoadedAt: Date.now(),
          availableAssemblyAsksLoadedAt: 0,
          availableMiscAsksLoadedAt: 0,
          availableHomeAsksLoadedAt: 0,
        };
      } else if (category.name === 'Item Assembly/Mounting') {
        return {
          ...state,
          availableAsks: asks,
          availableAssemblyAsksLoadedAt: Date.now(),
          availableMiscAsksLoadedAt: 0,
          availableHomeAsksLoadedAt: 0,
          availableShoppingAsksLoadedAt: 0,
        };
      } else {
        return {
          ...state,
          availableAsks: asks,
          availableMiscAsksLoadedAt: Date.now(),
          availableHomeAsksLoadedAt: 0,
          availableShoppingAsksLoadedAt: 0,
          availableAssemblyAsksLoadedAt: 0,
        };
      }
      /* eslint-enable */
    }
    case SET_USER_ASKS_TODO: {
      const { asks } = payload;
      return {
        ...state,
        userAsksTodo: asks,
        userAsksTodoLoadedAt: Date.now(),
      };
    }
    case SET_USER_ASKS: {
      const { asks } = payload;
      return {
        ...state,
        userAsks: asks,
        userAsksLoadedAt: Date.now(),
      };
    }

    case REMOVE_ASK: {
      const { id } = payload;
      return {
        ...state,
        userAsks: removeIdFromArray(id, state.userAsks),
      };
    }

    case SET_ASK: {
      const { ask } = payload;
      return {
        ...state,
        ask: { [ask.id]: ask },
      };
    }
    default:
      return state;
  }
}
