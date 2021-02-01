import React from 'react'
import './App.css'
import Header from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import {Provider} from "react-redux";
import store from "./Redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <SidebarContainer/>
                <WeatherDisplay/>
            </div>
        </Provider>
    )
}

window.store = store;

export default App
