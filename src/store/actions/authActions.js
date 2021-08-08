import * as actionTypes from './actionTypes';

export const signIn = (credentials) =>{
    return (dispatch,getState,{getFirebase})=>{
      dispatch({type:actionTypes.SIGN_IN_REQUEST});
      const firebase = getFirebase();
   
       
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:actionTypes.SIGN_IN_SUCCESS})
        }).catch(err=>{
            dispatch({type:actionTypes.SIGN_IN_FAILED,error:err});
            setTimeout(()=>{
              dispatch({type:actionTypes.REMOVE_ERROR})
            },2000)
        })
    
    }
}

export const signOut = ()=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type:actionTypes.SIGN_OUT});
        }).catch(err=>{
            dispatch({type:actionTypes.SIGN_OUT_FAILED,error:err})
        })

    }
}

export const signUp = (newUser)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
         //gives undefined in console when the signUp action is fired.
        console.log(getFirebase);
        dispatch({type: actionTypes.REGISTER_REQUEST});
        
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res)=>{
            firestore.collection('users').doc(res.user.uid).set({
              email:newUser.email,
              resumeIds:[]  
            })
            dispatch({type: actionTypes.REGISTER_SUCCESS})
        }).catch(err=>{

              dispatch({type: actionTypes.REGISTER_FAILED,error:err})
              setTimeout(()=>{
                dispatch({type:actionTypes.REMOVE_ERROR})
               },2000)
        })
    }
}


