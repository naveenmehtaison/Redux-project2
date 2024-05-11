import { createStore} from 'redux'
import { createSlice,configureStore } from '@reduxjs/toolkit'
const initialState1 = { counter: 1, toggle: false }
const initialState2 = {isauth:false}
const counterSlice = createSlice({
    name:'counter',
    initialState:initialState1,
    reducers:{
        increament(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
            state.counter=state.counter+action.payload
        },
        toggle(state){
            state.toggle = !state.toggle

        }
    }
})
const counterSlice2= createSlice({
    name:'auth',
    initialState:initialState2,
    reducers:{
        login(state){
            state.isauth=true
        },
        logout(state){
            state.isauth=false
        }

    }
})
const Store  = configureStore({
    reducer:{counter:counterSlice.reducer,authentication:counterSlice2.reducer},
    // reducer:counterSlice.reducer
})
export const StoreActions = counterSlice.actions
export const StoreActions2 = counterSlice2.actions
export default Store


