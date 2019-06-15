import React from 'react';
import styled from 'styled-components';

// Components 
import NavItem from './NavItem';

// Styles
const NavContainer = styled.nav`
    flex: 2;
    `;
const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
    `;

const Nav = () =>
    (
        <NavContainer>
            <NavLinks>
                <NavItem link="specs" />
                <NavItem link="products" />
                <NavItem link="contact" />
            </NavLinks>
        </NavContainer>
    );

export default Nav;