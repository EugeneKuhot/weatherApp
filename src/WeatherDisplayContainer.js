import React from 'react'
import {connect} from "react-redux"
import App from "./App"

const mapStateToProps = (state) => {
    return {
        cities: state.cities.cities
    }
}

const AppContainer = connect(mapStateToProps)(App)
export default AppContainer