import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Root from './components/Root';

import './index.css';

const app = (
    <Provider store={store}>
        <Root />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

