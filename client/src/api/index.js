import axios from 'axios';

const url ="http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newpost) => axios.post(url+'/create',newpost)
export const updatePost = (id,postdata) => axios.patch(`${url}/edit/${id}`,postdata)
