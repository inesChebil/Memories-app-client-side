import * as api from "../api/index.js";
import {
  CREATE,
  DELETE,
  UPDATE,
  LIKE,
  FETCH_ALL,
} from "../constants/actionTypes";

// create "Action Creators"
// Action Creators are functions that return action
// we are going to use redux-thunk, because it's asynchronous,
// so instaead of doing this :
// const getPosts = () =>  {
//     // payload is usually where we store our posts
//     const action = { type: "FETCH_ALL", payload: [] };
//     return action
//   };
// we are doing this:
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
  //   // payload is usually where we store our posts
  //   const action = { type: "FETCH_ALL", payload: [] };
  //   dispatch(action);
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    // console.log({ dataupdated: data });
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
