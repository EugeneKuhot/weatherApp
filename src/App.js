import React, {useState, useEffect} from 'react'
import './App.module.scss'
import Header from "./components/Header/Header"
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay"
import SidebarContainer from "./components/Sidebar/SidebarContainer"
import s from './App.module.scss'
import cn from 'classnames'


const App = (props) => {
    let [className, setClassName] = useState(null)

    useEffect(() => {
        props.cities.forEach(city => {
            if (city.isActive === true) {
                setClassName(city.className)
            }
        })
    });


    return (
        <div className={cn(s.app, s[className])}>
            <Header/>
            <div className={s.appBody}>
                <div className={s.forecastWindow}>
                    <SidebarContainer/>
                    <WeatherDisplay/>
                </div>
            </div>
        </div>
    )
}

export default App
