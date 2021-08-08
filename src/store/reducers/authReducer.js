import * as actionTypes from '../actions/actionTypes';

let  initState = {
    auth : {
        ErrorMessage:"",
        loading:false
    }
} 
const authReducer = (state=initState.auth,action)=>{
    switch(action.type){
        case actionTypes.SIGN_IN_FAILED:
            return {
                ...state,
                loading:false,
                ErrorMessage:action.error
            }
        case actionTypes.SIGN_IN_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case actionTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                loading:false,
                ErrorMessage:""
            }
         case actionTypes.REGISTER_REQUEST:
             return{
                 ...state,
                 laoding:true
             }
         case actionTypes.REGISTER_SUCCESS:
             return {
                ...state,
                loding:false,
                ErrorMessage:""
             }
         case actionTypes.REGISTER_FAILED:
             return {
                ...state,
                loading:false,
                ErrorMessage:action.error
             }   
        case actionTypes.REMOVE_ERROR:
            return {
                ...state,
                ErrorMessage:""
            }
        default:
            return state;
    }
}


export default authReducer;