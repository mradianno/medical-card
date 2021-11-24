import axios from 'axios';
const PATH = 'http://localhost:5003/api';

export const get = (apiEndpoint, params) =>
  axios.get(PATH + apiEndpoint, params).then((response) => {
    return response;
  });
export const post = (apiEndpoint, params) =>
  axios.post(PATH + apiEndpoint, params).then((response) => {
    return response;
  });
export const put = (apiEndpoint, params) =>
  axios.put(PATH + apiEndpoint, params).then((response) => {
    return response;
  });
export const apiDelete = (apiEndpoint, params) =>
  axios.delete(PATH + apiEndpoint, params).then((response) => {
    return response;
  });
export const patch = (apiEndpoint, params) =>
  axios.patch(PATH + apiEndpoint, params).then((response) => {
    return response;
  });
