import { combineReducers } from 'redux';
import {postsreducers } from './posts';

export default combineReducers({ 'posts':postsreducers })