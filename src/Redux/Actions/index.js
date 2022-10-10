import listAirlines from '../../data/index.js';

export const GET_AIRLINE_BY_ID = 'GET_AIRLINE_BY_ID';
export const GET_AIRLINES = 'GET_AIRLINES';


export const getAirlines = () => {
    return {
        type: GET_AIRLINES,
        payload: listAirlines
    }
};

export const getAirlineById = (airlineId) => {
    return {
        type: GET_AIRLINE_BY_ID,
        payload: airlineId
    }
};

