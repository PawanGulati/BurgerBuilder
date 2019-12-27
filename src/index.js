import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//Starting w/ REDUX
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import rootReducer from './store/reducers/reducers'

const store = createStore(rootReducer)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/> 
        </BrowserRouter>
    </Provider>
    )

render(app, document.getElementById('root'));

