import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux import
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_FEELING_FEEDBACK':

    }
}


ReactDOM.render(
<App />, 
document.getElementById('root'));
registerServiceWorker();
