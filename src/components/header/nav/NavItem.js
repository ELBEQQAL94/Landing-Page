import React from 'react';
import styled from 'styled-components';

// Styles 
const NavItemContainer = styled.div ``;
const NavLink = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-size: 16px;
    `;

const NavItem = ({ link }) =>
    (
        <NavItemContainer>
            <NavLink href="#">
                {link}
            </NavLink>
        </NavItemContainer>
    );


export default NavItem;