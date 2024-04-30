import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConstants";

const initialCounter = {count : 0}

const CounterReducers = (state=initialCounter,action) =>{
    switch (action.type) {
        case INCREMENT:
           return {
            ... state,
            count: state.count + 1
           }
        case DECREMENT:
           return {
            ... state,
            count: state.count - 1
           }
        case RESET:
           return {
            ... state,
            count: 0
           }
        default:
           return state;
    }

}

export default CounterReducers;