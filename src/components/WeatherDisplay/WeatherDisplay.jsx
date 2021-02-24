import React from 'react'
import s from './WeatherDisplay.module.scss'
import ForecastBlock from "./ForecastBlock/ForecastBlock";

const WeatherDisplay = (props) => {
    return (
        <div className={s.weatherBlock}>
            <ForecastBlock/>
        </div>
    )
}

export default WeatherDisplay