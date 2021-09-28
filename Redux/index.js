const redux = require('redux')
const createStore = redux.createStore

//action is an object with type property
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
    return {
        type: BUY_CAKE,
    }
}
function buyIceCream(){
    return {
        type: BUY_ICECREAM,
    }
}

//reducer is a fn (previousState, action)

const initailState = {
    numOfCakes:10,
    numOfIceCreams:20
}

const reducer = (state = initailState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}


//create the store
const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(()=> console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()