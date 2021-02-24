import React from 'react'
import './App.module.scss'
import Header from "./components/Header/Header"
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay"
import SidebarContainer from "./components/Sidebar/SidebarContainer"
import {Provider} from "react-redux"
import store from "./Redux/store"
import s from './App.module.scss'

function App() {
    return (
        <Provider store={store}>
            <div className={s.app}>
                <Header/>
                <div className={s.appBody}>
                    <div className={s.forecastWindow}>
                        <SidebarContainer/>
                        <WeatherDisplay/>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

window.store = store.getState();

export default App
