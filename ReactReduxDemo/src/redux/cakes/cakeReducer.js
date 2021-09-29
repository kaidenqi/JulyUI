import { BUY_CAKE } from './cakeTypes'

const initailState = {
    numOfCakes:10,
}

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