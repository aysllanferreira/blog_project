import axios from 'axios';

const url = 'http://localhost:3300/user';

export const registerUser = (newUser) => axios.post(`${url}/register`, newUser);
export const loginUser = (user) => axios.post(`${url}/login`, user);
export const privateRoute = () => axios.get(`${url}/`, {
  headers:
    {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
});
export const fetchUserById = () => axios.get(`${url}/fetchUser`, {
  headers:
    {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
});
