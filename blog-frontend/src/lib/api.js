import axios from 'axios';

export const wirtePost = ({title, body, tags}) => axios.post('/api/posts', {title,body,tags});
export const getPost = (id) => axios.get(`/api/posts/${id}`);
export const login = (password) => axios.post('/api/auth/login', {password});
export const checkLogin = () => axios.get('/api/auth/check');
export const logout=() => axios.post('/api/auth/logout');