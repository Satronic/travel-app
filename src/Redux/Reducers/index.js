import {
    GET_AIRLINES,
    GET_AIRLINE_BY_ID
} from "../Actions";

const initialState = {
    listAirlines: [],
    selectedAirline: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AIRLINES:
            return {
                ...state,
                listAirlines: action.payload
            }

        case GET_AIRLINE_BY_ID:
            const airlineId = action.payload;
            console.log('airlineId in reducers', airlineId)
            let airlineFounded = state.listAirlines.find(airline => {
                return airline.id === parseInt(airlineId);
            })

            console.log(airlineFounded)

            if(!airlineFounded){
                return {
                    ...state,
                    selectedAirline: {}
                }
            }
            return {
                ...state,
                selectedAirline: airlineFounded
            }

        default:
            return state;
    }
}

export default rootReducer;