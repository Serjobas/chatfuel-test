import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import api from './middleware'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, api)));

export default store;
