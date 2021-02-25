import React from 'react'
import s from './Sidebar.module.scss'
import cn from 'classnames'

const Sidebar = (props) => {
    return (
        <aside className={s.sidebar}>
            <h2>Select a city</h2>

            <ul>
                {props.cities.map(city => <li key={city.cityId}>
                    <button className={cn(s.cityButton, {
                    [s.activeCityButton]: props.cities[city.cityId].isActive
                    })} onClick={() => {props.setActiveCity(city.cityId)}}>{city.name}</button>
                </li>)}
            </ul>
        </aside>
    )
}

export default Sidebar