import {
  SET_POSTS,
  REMOVE_POST,
} from '../actionTypes';

import { removeIdFromArray } from '../_utils';

const startState = {
  allPosts: [],
  postsLoadedAt: 0,
};

export default function postsReducer(state = startState, action) {
  const { type, ...payload } = action;

  switch (type) {
    case SET_POSTS: {
      const {
        posts,
      } = payload;
      return {
        ...state,
        allPosts: posts
      }
    }

    case REMOVE_POST: {
      const { id } = payload;
      return {
        ...state,
        allPosts: removeIdFromArray(id, state.allPosts),
      };
    }
    default:
      return state;
  }
}
