import { loginAction } from "../actions/users";

export const userLogged=user=>{
    const usuario=loginAction(user);
    console.log('este suuario es',usuario)
    // return (dispatch)=>{
        
    //     dispatch(usuario);
    // }
};



