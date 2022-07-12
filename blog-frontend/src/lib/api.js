import axios from 'axios';

export const wirtePost = ({title, body, tags}) => axios.post('/api/posts', {title,body,tags});
export const getPost = (id) => axios.get(`/api/posts/${id}`);