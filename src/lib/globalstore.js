import { useContext, createContext, useReducer } from 'react';

const gameMode = {
    start: true, game: false, end: false, activity: false
}

const gameReducer = (state, action) => {
    switch (action.type) {
        case "START_SCREEN":
            return { ...state, start: true, game: false, activity: false, end: false}
        case "GAME_START":
            return { ...state, start: false, game: true, activity: true, end: false}
        case "GAMEOVER":
            return { ...state, start: false, game: false, activity: false, end: true}
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