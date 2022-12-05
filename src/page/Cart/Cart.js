import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductProvider';

const Cart = () => {
    const { state, dispatch } = useContext(ProductContext);
    return (
        <div>
            <h1>Cart</h1>
            <div>
                {
                    state.cart.map((c, index) => <div className='cart' key={index}>
                        <img className='cart-image' src={c.image} alt="" />
                        <h3>{c.model}</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;