import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux import
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = { feeling: 0, understanding: 0, support: 0, comments: ''} , action) =>{
    switch(action.type){
        case 'ADD_FEELING_FEEDBACK':
            return  state.feeling = action.payload;
        case 'ADD_UNDERSTANDING_FEEDBACK':
            return  state.understanding = action.payload;

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
