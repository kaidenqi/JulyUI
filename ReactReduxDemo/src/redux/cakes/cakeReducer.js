import { BUY_CAKE } from './cakeTypes'

const initailState = {
    numOfCakes:10,
}


//Reducers are functions that take the current state and an action as arguments, 
// and return a new state result. In other words, (state, action) => newState.
const cakeReducer = (state = initailState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        default: return state
    }
}

export default cakeReducer