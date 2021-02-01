import Sidebar from "./Sidebar"
import {setActiveCityAC} from "../../Redux/citiesReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        cities: state.cities.cities
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveCity: (cityId) => {dispatch(setActiveCityAC(cityId))}
    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer
