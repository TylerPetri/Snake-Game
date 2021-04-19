import Gameover from '../assets/gameover.PNG'
import { useStoreContext } from '../lib/globalstore'
import { useState, useEffect } from 'react'
import './gameover.css'

function GameOver(){
    const [{ end, countdown }, dispatch] = useStoreContext()
    // const [counter, setCounter] = useState(35)

    // useEffect(()=>{
    //     if(countdown) counter > 0 && setTimeout(() => setCounter(counter - 1), 100)
    //     if (counter < 1) {
    //         dispatch({type:'GAME_START'})
    //         setCounter(35)
    //     }
    // }, [countdown, counter])

    // function restartGame(){
    //     dispatch({type:"GAME_BOARD"})
    // }

    function startScreen() {
        dispatch({type:"START_SCREEN"})
    }

    return (
        <>
        <div className="gameoverContainer" style={{display: end ? 'block' : 'none'}}>
            <div className="dropGameover">
                <div>
                    <button onClick={startScreen}>Start screen</button>
                    {/* <button onClick={restartGame}>Restart</button> */}
                </div>
            <img src={Gameover} alt='Gameover' className="goImg"/>
            </div>
        </div>
        </>
    )
}

export default GameOver