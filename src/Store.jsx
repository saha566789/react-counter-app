import {createStore} from "redux";
import CounterReducers from "./Services/reducers/CounterReducers";
const store = createStore(CounterReducers)

export default store;