import * as actionTypes from '../actions/actionTypes';


let initState = {
    contactSection:{

    }
}

const contactReducer = (state=initState.contactSection,action)=>{
    switch(action.type){
        case actionTypes.ADD_CONTACT:
            return{
                ...state,
                ...action.contactSection
            }
        case actionTypes.UPDATE_CONTACT:
            return{
                ...state,
                ...action.contactSection
            }
            default:
                return state;
    }
}


export default contactReducer;