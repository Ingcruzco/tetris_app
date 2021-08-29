import { types } from "../types/types";


export const loginAction=({uid,name,lastName})=>({
    type:types.loginUser,
    payload:{
        uid,
        name,
        lastName,
        error:false,
        loading:false,
    }
});

