import React, { Fragment,useState } from "react";
import { Display} from "./Display";
import Navbar from "./Navbar";
import Stage from "./Stage";
import { StyledButton } from "./styles/StyledButton";
import { StyledTetris, StyledTetrisWrapper } from "./styles/StylesTetris";
import { checkCollition} from "../helpers/gameHelpers";
import { createStage } from "../helpers/gameHelpers";
import { useGameStatus } from "../hooks/useGameStatus";
import { useInterval } from "../hooks/useIntervals";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

function TetrisApp() {
  const [gameOver,setGameOver]=useState(false);
  const [delay,setDelay]=useState(null);
  const [player,resetPlayer,updatePlayerPosition,playerRotate]=usePlayer();
  const [stage, setStage, rowsCleared]=useStage(player,resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel]=useGameStatus(rowsCleared);
  const movePlayer= dir =>{
    if(!checkCollition(stage,player,dir,0)){
      updatePlayerPosition(dir,0,false);
    }
  }


  const startGame=(e)=>{
    setStage(createStage());
    resetPlayer();
    setDelay(1000/(level+1)+200);
    setScore(0);
    setLevel(0);
    setGameOver(false);
    setRows(0);

  }
  const updateGame=()=>{
    if(!checkCollition(stage,player,0,1)){
      updatePlayerPosition(0,1,false);
    }else{
      if(player.pos.y<1){
        setDelay(null);
        setGameOver(true);  
      }
      updatePlayerPosition(0,0,true);
    }
  }
  useInterval(()=>{
    updateGame();
  },delay);

  const keyUp=({keyCode})=>{
    if(keyCode===40){
      setDelay(1000/(level+1));
    }
  }

  const move=({keyCode})=>{
    switch (keyCode) {
      case 38:
        playerRotate(stage,1);
        break;
      case 37:
        movePlayer(-1);
        break;
      case 39:
        movePlayer(1)
        break;
      case 40:
        setDelay(100);
        break;
      default:
        return;
    }
  }
  return (
    <Fragment>
      <Navbar/>
      <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e)=>move(e)}
      onKeyUp={keyUp}
      >
        <StyledTetris>
        
          <Stage stage={stage} />
          <aside>
            
            { gameOver?(
              
                <Display gameOver={gameOver}  text={"Game Over"}></Display>
            ):(
                <div>
                  <Display text={`Level: ${level}`}></Display>
                  <Display text={`Score: ${score}`}></Display>
                  <Display text={`Rows: ${rows}`}></Display>
                </div>)
            }
            
            <StyledButton onClick={startGame}>Empezar</StyledButton> 
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </Fragment>

  );
}

export default TetrisApp;
