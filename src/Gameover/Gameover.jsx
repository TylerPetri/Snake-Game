import Gameover from '../assets/gameover.PNG'
import { useStoreContext } from '../lib/globalstore'
import './gameover.css'

function GameOver(){
    const [{end}, dispatch] = useStoreContext()

    function restartGame() {
        dispatch({type:"GAME_START"})
    }

    function startScreen() {
        dispatch({type:"START_SCREEN"})
    }

    return (
        <>
        <div className="gameoverContainer" style={{display: end ? 'block' : 'none'}}>
            <div className="dropGameover">
                <div>
                    <button onClick={startScreen}>Start screen</button>
                    <button onClick={restartGame}>Restart</button>
                </div>
            <img src={Gameover} alt='Gameover' className="goImg"/>
            </div>
        </div>
        </>
    )
}

export default GameOver