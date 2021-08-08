import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fbConfig from './config/fbConfig';
 
import {createStore,applyMiddleware ,compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig,{useFirestoreForProfile:true,userProfile:'users',attachAuthIsReady:true}), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

console.log(getFirestore,getFirebase);

store.firebaseAuthIsReady.then(()=>{
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
})