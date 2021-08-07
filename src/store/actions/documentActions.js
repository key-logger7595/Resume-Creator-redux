import * as actionTypes from '../actions/actionTypes';

const{ v4:uuidv4 } = require('uuid');


export const setSkinCd = (skinCd)=>{
    let id = uuidv4();
    console.log(id);
    return {
        type:actionTypes.SET_SKIN,
        document:{
            skinCd:skinCd,
            id:id
        }
    }
}

export const updateSkinCd = (documentId,skinCd)=>{
    console.log(documentId);
    return {
        type:actionTypes.UPDATE_SKIN,
        document:{
            skinCd:skinCd,
            id:documentId
        }
    }
}
