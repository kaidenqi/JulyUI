import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

//props 指向App.js里传过来的props，就是store
function CakeContainer(props) {
    return (
        <>
            <h1>Num of Cakes - {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </>
    )
}



//解释整个函数：As the first argument passed in to connect, mapStateToProps is used for
// selecting the part of the data from the store that the connected component needs.

// 解释函数的形参：The first argument to a mapStateToProps function is the entire Redux store 
// state (the same value returned by a call to store.getState()).

//https://react-redux.js.org/using-react-redux/connect-mapstate
const mapStateToProps = state => {
    return {
        numOfCakes : state.cake.numOfCakes
    }
}





//As the second argument passed in to connect, mapDispatchToProps is used for 
// dispatching actions to the store.
//https://react-redux.js.org/using-react-redux/connect-mapdispatch
const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}

//The connect() function connects a React component to a Redux store. 
// 把react组件和存放数据的store关联起来
//https://react-redux.js.org/api/connect
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
