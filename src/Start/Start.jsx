import { useStoreContext } from '../lib/globalstore'
import Board from '../Board/Board'
import Gameover from '../Gameover/Gameover'
import { useEffect, useState } from 'react'
import './Start.css'

function Start(){

    const [{start, countdown}, dispatch] = useStoreContext()
    const [counter, setCounter] = useState(35)

    useEffect(()=>{
        if(countdown) counter > 0 && setTimeout(() => setCounter(counter - 1), 100)
        if (counter < 1) {
            dispatch({type:'GAME_START'})
            setCounter(35)
        }
    }, [countdown, counter])

    function closeStart(){
        dispatch({type:"GAME_BOARD"})
    }

    return(
        <div className="bigContainer">
            <div className="countdownBox" style={{display: countdown ? 'block' : 'none'}}>
                <div className="countdownTimer" style={{ display: counter > 25 ? 'block' : 'none', opacity: counter === 35 ? '1' : '.5'}}>3</div>
                <div className="countdownTimer" style={{ display: counter <= 25 && counter > 15 ? 'block' : 'none', opacity: counter === 25 ? '1' : '.5'}}>2</div>
                <div className="countdownTimer" style={{ display: counter <= 15 && counter > 5 ? 'block' : 'none', opacity: counter === 15 ? '1' : '.5'}}>1</div>
                <div className="countdownTimer" style={{ display: counter <= 5 ? 'block' : 'none'}}>Go!</div>
            </div>
            <div className="startContainer" style={{display: start ? 'block' : 'none'}}>
                <div className="dropStart">
                    <button onClick={closeStart}>Start</button>
                </div>
            </div>
            <Gameover/>
            <Board/>
        </div>
    )
}

export default Start