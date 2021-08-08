import authReducer from './authReducer';
import educationReducer from './educationReducer';
import contactReducer from './contactReducer';
import documentReducer from './documentReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer =combineReducers({
    auth:authReducer,
    educationSection:educationReducer,
    contactSection:contactReducer,
    document:documentReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer

})

export default rootReducer;