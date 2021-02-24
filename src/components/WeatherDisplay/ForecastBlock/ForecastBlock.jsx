import React from 'react'
import s from './ForecastBlock.module.scss'

const ForecastBlock = (props) => {
    return (
        <div className={s.forecastBlock}>
            <h2>Rain in Palo Alto</h2>

            <ul>
                <li>Current: 56.84</li>
                <li>High: 59</li>
                <li>Low: 55.4</li>
                <li>Wind speed: 8.86 mi/hr</li>
            </ul>
        </div>
    )
}

export default ForecastBlock