import API from '../../API';
import {
  SET_POSTS,
    REMOVE_POST
} from '../actionTypes';
import { shouldLoad } from '../_utils';

export const fetchAllPosts = (categoryId) => async (
  dispatch,
  getState
) => {
  const {
    posts: {
      postsLoadedAt
    },
  } = getState();
  if (!shouldLoad(postsLoadedAt)) return;
  const posts = await API.get(`/posts`);
  dispatch({ type: SET_POSTS, posts });
};

export const deletePost = (id) => async (dispatch, getState) => {
  const {
    auth: { accessToken },
  } = getState();
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authentication: accessToken,
    },
  };
  await API.delete(`/posts/${id}`, config);
  dispatch({ type: REMOVE_POST, id });
};

export const savePost = (post) => async (getState) => {
  const {
    auth: { accessToken },
  } = getState();
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authentication: accessToken,
    },
  };
  if (post.id) {
    await API.put(`/posts/${post.id}`, post, config);
  } else {
    await API.post('/posts', post, config);
  }
};

