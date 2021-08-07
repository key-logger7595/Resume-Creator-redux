import * as actionTypes from  './actionTypes';

export const add = (contactSection)=>{
    console.log("Add action dispatched")
    return {
        type:actionTypes.ADD_CONTACT,
        contactSection:contactSection
    }
}

export const update = (contactSection)=>{
    console.log("Update Action Dispached");
    return {
        type:actionTypes.UPDATE_CONTACT,
        contactSection:contactSection
    }
}

