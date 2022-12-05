import React, { createContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../state/ProductState/actionTypes';
import { initialState, reducer } from '../state/ProductState/reducer';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)
    useEffect(() => {
        dispatch({ type: actionTypes.FETCH_START })
        fetch("https://raw.githubusercontent.com/mir-hussain/moon-tech-usereducer-contextapi/main/products.json")
            .then(res => res.json())
            .then(data => dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data }))
            .catch(() => dispatch({ type: actionTypes.FETCH_ERROR }))
    }, [dispatch])

    const value = {
        state,
        dispatch
    }



    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};



export default ProductProvider;