const SET_ACTIVE_CITY = 'SET_ACTIVE_CITY'

let initialState = {
    cities: [
        {name: "London", cityId: 0, isActive: true, className: 'london'},
        {name: "Krakow", cityId: 1, isActive: false, className: 'krakow'},
        {name: "Naples", cityId: 2, isActive: false, className: 'naples'},
        {name: "Dubai", cityId: 3, isActive: false, className: 'dubai'}
    ]
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_CITY:
            let citiesCopy = JSON.parse(JSON.stringify(state.cities))
            citiesCopy.forEach(city => city.cityId === action.cityId ? city.isActive = true : city.isActive = false)

            return {
                ...state,
                cities: citiesCopy
            }

        default:
            return state
    }
}

export const setActiveCityAC = (cityId) => ({type: SET_ACTIVE_CITY, cityId})

export default citiesReducer