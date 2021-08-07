import authReducer from './authReducer';
import educationReducer from './educationReducer';
import contactReducer from './contactReducer';
import documentReducer from './documentReducer';
import { combineReducers } from 'redux';

const rootReducer =combineReducers({
    auth:authReducer,
    educationSection:educationReducer,
    contactSection:contactReducer,
    document:documentReducer
})

export default rootReducer;