import axiosInstance from './axiosInstance';

export const getApiData = async () => {
  return axiosInstance.get('/posts');
};
