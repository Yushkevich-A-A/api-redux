import { createStore, combineReducers } from 'redux';
import serviceListReducer from '../reducers/serviceList/serviceList';
import serviceAddReducer from '../reducers/serviceAdd/serviceAdd';

const reducers = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
});

const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;