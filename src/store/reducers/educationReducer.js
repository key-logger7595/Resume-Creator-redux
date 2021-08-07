
import * as actionTypes from '../actions/actionTypes';

let initState = {
    educationSection: {
    }
}

const educationReducer = (state=initState.educationSection,action)=>{
    switch(action.type){
        case actionTypes.ADD_EDUCATION:
            return {
                ...state,
               ...action.educationSection
               
            }
        case actionTypes.UPDATE_EDUCATION:
            return {
                ...state,
                ...action.educationSection
            }
            default:
                return state

    }
}

export default educationReducer;