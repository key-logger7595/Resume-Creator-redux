import * as actionTypes from '../actions/actionTypes';
let initState = {
    document:{
        id:null,
        skinCd:""
    }
}
const documentReducer = (state=initState.document,action) =>{
       switch(action.type){
           case actionTypes.SET_SKIN:
               console.log(action.document);
               return{
                   ...state,
                   id:action.document.id,
                   skinCd:action.document.skinCd
               }
           case actionTypes.UPDATE_SKIN:
             return {
                ...state,
                id:action.document.id,
                skinCd:action.document.skinCd
             }
            default:
                return state;
       }
}

export default documentReducer;