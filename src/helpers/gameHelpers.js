

export const createStage=()=>{
    var ejercicio=Array.from(Array(20),()=> Array(12).fill([0,'clear']));
    return ejercicio;
}

export const checkCollition=(stage,player,moveX,moveY)=>{
    
    //||stage[player.pos.y+moveY+row][player.pos.x+moveX+column]=='merge'
    for(let row=0;row<player.piece.length;row++){
        for(let column=0;column<player.piece[row].length;column++){
            if(player.piece[row][column]!==0){
                if(
                    !stage[player.pos.y+moveY+row]||
                    !stage[player.pos.y+moveY+row][player.pos.x+moveX+column] ||
                    stage[player.pos.y+moveY+row][player.pos.x+moveX+column][1]!=='clear' 
                    
                ){
                    return true;
                }
            }
        }
    }

    return false;

}