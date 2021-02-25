const SET_ACTIVE_CITY = 'SET_ACTIVE_CITY'

let initialState = {
    cities: [
        {name: "London", id: 0, isActive: true},
        {name: "Krakow", id: 1, isActive: false},
        {name: "Naples", id: 2, isActive: false},
        {name: "Dubai", id: 3, isActive: false}
    ]
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_CITY:
            debugger
            return {
                ...state,
                /*...state.cities.forEach(city => city.isActive = false),*/
                cities: [...state.cities, {name: "Krakow", id: 1, isActive: true}]
            }

        default:
            return state
    }
}


export const setActiveCityAC = (cityId) => ({type: SET_ACTIVE_CITY, cityId})

export default citiesReducer