import Gameover from '../assets/gameover.PNG'
import { useStoreContext } from '../lib/globalstore'

function GameOver(){
    const [{end}, dispatch] = useStoreContext()

    return (
        <img src={Gameover} alt='Gameover' style={{display: end ? 'block' : 'none'}}/>
    )
}

export default GameOver