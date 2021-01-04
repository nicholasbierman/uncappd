import { fetch } from './csrf';

const SET_ALL_BREWERIES = 'breweries/setBreweries';

const setBreweries = (breweries) => ({
    type: SET_ALL_BREWERIES,
    payload: breweries
});

export const fetchAllBreweries = () => {
    return async (dispatch) => {
        const response = await fetch('/api/breweries');
        dispatch(setBreweries(response.data.breweries));
    };
};


const initialState = [];

export default function breweriesReducer (state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_ALL_BREWERIES:
            newState = Object.assign({}, state, { breweries: action.payload });
            return newState;
    default:
      return state;
  }
}
