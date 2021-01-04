import { fetch } from './csrf';

const SET_ALL_CHECKINS = 'checkins/setCheckins';
const ADD_CHECKIN = 'checkins/addCheckins';

const setCheckins = (checkins) => ({
    type: SET_ALL_CHECKINS,
    payload: checkins
});

export const fetchAllCheckinsForUser = (id) => {
    return async (dispatch) => {
        const response = await fetch(`/api/checkins/${id}`);
        dispatch(setCheckins(response.data.userCheckins));
    };
};

export const addCheckin = () => {
    return async (dispatch) => {
        const response = await fetch(`/api/checkins`)
    }
}

const initialState = [];

export default function checkinsReducer (state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_ALL_CHECKINS:
            newState = Object.assign({}, state, { checkins: action.payload });
            return newState;
        default:
            return state;
    }
}