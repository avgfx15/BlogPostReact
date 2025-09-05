import axiosInstance from './axiosInstance';

export const getApiData = async () => {
  return axiosInstance.get('/posts');
};

export const deleteApiData = async (id) => {
  return axiosInstance.delete(`/posts/${id}`);
};

export const addNewPost = async (newPost) => {
  return axiosInstance.post('/posts', newPost);
};

export const updatePost = async (id, updatedPost) => {
  return axiosInstance.put(`/posts/${id}`, updatedPost);
};


