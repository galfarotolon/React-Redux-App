import { FETCH_SPELL_START, FETCH_SPELL_SUCCESS, FETCH_DESC_START, FETCH_DESC_SUCCESS } from "../actions";


const initialState = {

    isFetching: false,
    spell: '',
    desc: '',
    error: ""
}




export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_SPELL_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SPELL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                spell: action.payload
            };
        case FETCH_DESC_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_DESC_SUCCESS:
            return {
                ...state,
                isFetching: false,
                desc: action.payload
            };
        default:
            return state;
    }
};