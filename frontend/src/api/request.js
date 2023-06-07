 import axios from 'axios';
 const baseURL="http://localhost:5000";
 export const  signUp =async (data) => await axios.post(`${baseURL}/auth/signup`,data);
 export const  signIn =async (data) => await axios.post(`${baseURL}/auth/signin`,data);