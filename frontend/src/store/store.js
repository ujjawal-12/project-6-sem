import {createStore, combineReducers,applyMiddleware} from 'redux';
import loginreducer from '../reducers/loginreducer';

const rootreducer = combineReducers({
    login : loginreducer,
})

const store = createStore(rootreducer);

export default store;