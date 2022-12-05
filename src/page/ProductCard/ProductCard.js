import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductProvider';
import { actionTypes } from '../../state/ProductState/actionTypes';
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const { dispatch } = useContext(ProductContext);
    const { model, price, rating, image } = product;
    return (
        <div className='card'>
            <img className='img' src={image} alt="" />
            <h3>{model}</h3>
            <p>Price:{price}</p>
            <p>Rating:{rating}</p>
            <button onClick={() => dispatch({ type: actionTypes.ADD_TO_CART, payload: product })} className='btn'>Add to cart</button>
        </div>
    );
};

export default ProductCard;