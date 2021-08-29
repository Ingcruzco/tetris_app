import { useCallback, useState } from "react"
import { checkCollition } from "../helpers/gameHelpers";
import { PIECES, randomPiece } from "../pieces";

const STAGE_WIDTH=12;
export const usePlayer=()=>{
    const [player,setPlayer]=useState({
        pos:{x:0,y:0},
        piece:PIECES[0].shape,
        collided:false,
    });

    const updatePlayerPosition=(x,y,collided)=>{
        setPlayer(prev=>({
            ...prev,
            pos:{x:(prev.pos.x+=x),y:(prev.pos.y+=y)},
            collided,
          }));
    }
    const rotation=(pieceCloned,dir)=>{
        const newFormPiece=pieceCloned.map((_,index)=>
            pieceCloned.map(column=>column[index])
        );

        if (dir > 0) return newFormPiece.map(row => row.reverse());
        return newFormPiece.reverse();
    }
    const playerRotate=(stage, dir)=>{
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.piece=rotation(clonedPlayer.piece);

        const pos = clonedPlayer.pos.x;
        let offset = 1;
        while (checkCollition(stage,player,0,0)) {
            clonedPlayer.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > clonedPlayer.piece[0].length) {
                rotation(clonedPlayer.piece, -dir);
              clonedPlayer.pos.x = pos;
              return;
            }
          }
        setPlayer(clonedPlayer);
    }

    const resetPlayer=useCallback(()=>{
        console.log('me ejecute con reste')
        setPlayer({
            pos:{x:STAGE_WIDTH/2-2,y:0},
            piece:randomPiece().shape,
            collided:false
        });
    },[])


    return [player,resetPlayer,updatePlayerPosition,playerRotate];

}