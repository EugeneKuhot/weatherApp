import React from 'react'

const Sidebar = (props) => {
    return (
        <aside>
            <h2>Select a city</h2>

            <ul>
                {props.cities.map(city => <li key={city.id}>
                    <button onClick={() => {props.setActiveCity(city.id)}}>{city.name}</button>
                </li>)}
            </ul>
        </aside>
    )
}

export default Sidebar