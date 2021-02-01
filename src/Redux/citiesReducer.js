const SET_ACTIVE_CITY = 'SET_ACTIVE_CITY'

let initialState = {
    cities: [
        {name: "Palo Alto", zip: "94303", id: 0, isActive: true},
        {name: "San Jose", zip: "94088", id: 1, isActive: false},
        {name: "Santa Cruz", zip: "95062", id: 2, isActive: false},
        {name: "Honolulu", zip: "96803", id: 3, isActive: false}
    ]
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_CITY:
            debugger
            return {
                ...state,
                ...state.cities.forEach(city => city.isActive = false),
                ...state.cities[action.cityId].isActive = true
            }

        default:
            return state
    }
}


export const setActiveCityAC = (cityId) => ({ type: SET_ACTIVE_CITY, cityId})

export default citiesReducer