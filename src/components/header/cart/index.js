import React from 'react';
import styled from 'styled-components';
import cart from '../../../img/cart.svg';

// Components
import Img from '../../ui/Img';

// Styles
const CartConatiner = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    `;

const Cart = () =>
    (
        <CartConatiner>
            <Img
                src={cart}
                alt='cart'
                title='cart'
            />
        </CartConatiner>
    );

export default Cart;