import { useStoreContext } from '../lib/globalstore'
import Board from '../Board/Board'
import Gameover from '../Gameover/Gameover'
import './Start.css'

function Start(props){

    const [{start}, dispatch] = useStoreContext()

    function startGame(){
        dispatch({type:"GAME_START"})
    }

    return(
        <div className="bigContainer">
            <div className="startContainer" style={{display: start ? 'block' : 'none'}}>
                <div className="dropStart">
                    <button onClick={startGame}>Start</button>
                </div>
            </div>
            <Gameover/>
            <Board/>
        </div>
    )
}

export default Start