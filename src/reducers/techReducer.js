import {
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR,
    GET_TECHS
} from '../actions/types';

const initialState = {
    techs: null,
    loading: false,
    error: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};