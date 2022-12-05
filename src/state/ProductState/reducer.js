import { actionTypes } from "./actionTypes";

export const initialState = {
    loading: false,
    products: [],
    error: false
};

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCH_START:
            return {
                ...state,
                loading: true,
            }

        case actionTypes.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }

        case actionTypes.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}