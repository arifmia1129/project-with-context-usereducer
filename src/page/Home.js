import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductProvider';
import { actionTypes } from '../state/ProductState/actionTypes';

const Home = () => {
    const { state: { products } } = useContext(ProductContext);


    return (
        <div>
            {
                products.map((product, index) => <h1 key={index}>{product.model}</h1>)
            }
        </div>
    );
};

export default Home;