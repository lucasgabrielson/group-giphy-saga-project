import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
//needed for saga
import createSagaMiddleware from 'redux-saga';
//imports for saga to send and receive actions
import {put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

const searchSaga = (state = "", action) =>{
    console.log('in searchSaga')
    return state
}

function* watcherSaga(){
    yield takeEvery('SEARCH_GIPHY', searchSaga)
}

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    // This function is our first reducer
    // reducer is a function that runs every time an action is dispatched
    combineReducers({
        searchSaga: searchSaga,
    }),    
    applyMiddleware(sagaMiddleware, logger),
    );

    // use the watcher
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
