import { useStoreContext } from '../lib/globalstore'
import { useState, useEffect } from 'react'
import { GrTrophy } from 'react-icons/gr'
import './gameover.css'

function GameOver(){
    const [{ end, countdown, score }, dispatch] = useStoreContext()
    const [counter, setCounter] = useState(35)

    useEffect(()=>{
        setCounter(35)
        if(countdown) counter > 0 && setTimeout(() => setCounter(counter - 1), 100)
        if (counter < 1) {
            dispatch({type:'GAME_START'})
            setCounter(35)
        }
    }, [countdown, counter])

    function closeStart(){
        dispatch({type:"GAME_BOARD"})
    }

    const highscore = localStorage.getItem("SnakeGameHighScore")

    return (
        <>
        <div className="gameoverContainer" style={{display: end ? 'block' : 'none'}}>
            <div className="dropGameover">
                <div className="highscore"><GrTrophy/> : {highscore}</div>
                <div className="lastscorebox"><div className="lastscore"></div>: {score}</div>
                <button className="startBtn" onClick={closeStart}>Start</button>
            </div>
        </div>
        </>
    )
}

export default GameOver