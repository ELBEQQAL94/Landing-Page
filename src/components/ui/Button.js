import React from 'react';
import styled from 'styled-components';

// styles
const ButtonWrapper = styled.div``;
const MyButton = styled.button`
    padding: 1em 3em;
    text-transform: uppercase;
    cursor: pointer;
`;

const Button = ({ title }) =>
    (
        <ButtonWrapper>
            <MyButton>{title}</MyButton>
        </ButtonWrapper>
    );

export default Button;