import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductProvider';
import { actionTypes } from '../state/ProductState/actionTypes';
import Cart from './Cart/Cart';
import ProductCard from './ProductCard/ProductCard';

const Home = () => {
    const { state: { products } } = useContext(ProductContext);


    return (
        <div>
            <Cart />
            <h1>All Products</h1>
            <div id='home'>
                {
                    products.map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>
        </div>
    );
};

export default Home;