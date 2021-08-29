import { types } from "../types/types";
const initialState={
    uid:null,
    name:"",
    lastName:"",
    loading:false,
    error:false,
}


export const userReduce=(state=initialState,action)=>{
    switch (action.type) {
        case types.loginUser:
            return {
                ...state,
                uid:action.payload.uid,
                name:action.payload.name,
                lastName:action.payload.lastName,
            };
        case types.resetUser:
            return initialState;
        default:
            return state;
    }   
}


