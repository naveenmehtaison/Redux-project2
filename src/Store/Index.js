import { createStore} from 'redux'

const ReduxFunc = (state={counter:1},action)=>{
    if(action.type==='increament'){
        return{counter : state.counter +5}
    }
    else if (action.type==='decrement'){
        return{counter : state.counter+5}
    }
    return state

}

const Store  = createStore(ReduxFunc)
export default Store


