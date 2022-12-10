import axios from 'axios';

const url = 'http://localhost:3300/user';

export const registerUser = (newUser) => axios.post(`${url}/register`, newUser);
export const loginUser = (user) => axios.post(`${url}/login`, user);
export const privateRoute = () => axios.get(`${url}/private`);
