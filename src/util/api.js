import axios from 'axios';
import { SERVER_URL } from './Constant';

const apiClient = axios.create({
  baseURL: SERVER_URL, // replace this with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers here
  },
});

const apiRequest = async ({ method, url, data = {}, params = {} }) => {
  try {
    const response = await apiClient({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error('API call error:', error);
    throw error;
  }
};

export const get = (url, params) => apiRequest({ method: 'get', url, params });
export const post = (url, data) => apiRequest({ method: 'post', url, data });
export const put = (url, data) => apiRequest({ method: 'put', url, data });
export const del = (url) => apiRequest({ method: 'delete', url });

// Example usage:
// get('/users', { name: 'John' }).then(data => console.log(data));
// post('/users', { name: 'Jane', age: 25 }).then(data => console.log(data));
// put('/users/1', { name: 'Jane Updated', age: 26 }).then(data => console.log(data));
// del('/users/1').then(() => console.log('User deleted'));
