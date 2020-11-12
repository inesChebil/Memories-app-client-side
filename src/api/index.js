import axios from "axios";

const url = "https://memories-projet.herokuapp.com/posts";

export const fetchPosts = () => {
  return axios.get(url);
};
export const createPost = (newPost) => {
  return axios.post(url, newPost);
};
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
// All actions toward our backend are going to be done using Redux
// We need to dispatch those actions
export const deletePost = (id) => {
  return axios.delete(`${url}/${id}`);
};
export const likePost = (id) => {
  return axios.patch(`${url}/${id}/likePost`);
};
