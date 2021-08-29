import { useCallback, useEffect, useState } from "react"


export const useGameStatus=(rowsCleared)=>{
    const [level,setLevel]=useState(0);
    const [rows,setRows]=useState(0);
    const [score,setScore]=useState(0);

    const scoresLevels=[40,100,300,1200];

    const calculateScore=useCallback(()=>{
        
        if(rowsCleared>0){
            if(rows+rowsCleared>=(level+1)*10){
                setLevel(prev=>prev+1);
              }
            setScore(prev=>prev+scoresLevels[rowsCleared-1]*(level+1));
            setRows(prev=>prev+rowsCleared);
        }    
    },[level,rowsCleared])

    useEffect(()=>{
        calculateScore();
    },[rowsCleared])


    return [score, setScore, rows, setRows, level, setLevel];
}

