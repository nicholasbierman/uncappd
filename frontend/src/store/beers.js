import { fetch } from './csrf';

const SET_ALL_BEERS = 'beers/setBeers';

const setBeers = (beers) => ({
    type: SET_ALL_BEERS,
    payload: beers
});

export const fetchAllBeers = () => {
    return async (dispatch) => {
        const response = await fetch('/api/beers');
        dispatch(setBeers(response.data.beers));
    }
}

const initialState = [];

export default function beersReducer (state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_ALL_BEERS:
            newState = Object.assign({}, state, { beers: action.payload });
            return newState;
        default:
            return state;
    }
}