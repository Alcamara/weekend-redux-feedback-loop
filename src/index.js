import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux import
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackObj = {}

const feedbackReducer = (state = feedbackObj , action) =>{
    switch(action.type){
        case 'ADD_FEELING_FEEDBACK':
            state.feeling = action.payload
            break;
        case 'ADD_UNDERSTANDING_FEEDBACK':
            state.understanding = action.payload
            break;
        case 'ADD_SUPPORT_FEEDBACK':
            state.support = action.payload
            break;
        case 'ADD_COMMENT_FEEDBACK':
            state.comment = action.payload
            break;
    }

    return state;
}

const store = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
