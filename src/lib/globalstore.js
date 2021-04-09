import { useContext, createContext } from 'react';

const gameMode = {
    start: true, game: true, end: true
}

const gameReducer = (state, action) => {
    switch (action.type) {
        case "START_SCREEN":
            return { ...state, start: true, game: false, end: false}
        case "GAME_START":
            return { ...state, start: false, game: true, end: false}
        case "GAMEOVER":
            return { ...state, start: false, game: false, end: true}
        default:
            console.log(`Invalide action type: ${action.type}`)
            return state
    }
}

const StoreContext = createContext()

const useStoreContext = function(){
    return useContext(StoreContext)
}

const StoreProvider = function(props){
    const [state, dispatch] = useReducer( gameReducer, gameMode )
    return <StoreContext.Provider value={[state, dispatch]} {...props}/>
}

export { StoreProvider, useStoreContext }