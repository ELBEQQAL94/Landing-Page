import React from 'react';
import styled from 'styled-components';

// Components
import Logo from './image/Logo';
import Nav from './nav';
import Cart from './cart';

// Styles
const HeaderWrapper = styled.header`
     display: flex;
     width: 80%;
     margin: auto;
     height: 10vh;
     align-items: center;
     padding: 3em;
    `;

const Header = () =>
    (
        <HeaderWrapper>
            <Logo />
            <Nav />
            <Cart />
        </HeaderWrapper>
    );


export default Header;

