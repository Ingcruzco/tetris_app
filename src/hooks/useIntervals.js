import { useEffect, useRef } from "react"


export const useInterval=(callback,delay)=>{
    const callbackSaved=useRef();

    useEffect(() => {
        callbackSaved.current = callback;
      }, [callback]);

    useEffect(()=>{
        if(delay!==null){
            const intervalID=setInterval(()=>{
                callbackSaved.current();
            },delay)
            return ()=> clearInterval(intervalID);    
        }
    },[delay])   



}


