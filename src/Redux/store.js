import {applyMiddleware, combineReducers, createStore} from "redux"
import citiesReducer from "./citiesReducer";

let reducers = combineReducers({
    cities: citiesReducer
})

const store = createStore(reducers, applyMiddleware());

export default store