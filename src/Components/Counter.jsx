import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../Services/Actions/CounterAction";



const Counter = () => {
 const count = useSelector((state)=> state.count)
 const dispatch = useDispatch()
    const handleIncrement = () =>{
       dispatch(incrementCounter())
    }
    const handleReset = () =>{
       dispatch(resetCounter())
    }
    const handleDecrement = () =>{
       dispatch(decrementCounter())
    }
    
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count :{count}</h3>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>decrement</button>
        </div>
    );
};

export default Counter;