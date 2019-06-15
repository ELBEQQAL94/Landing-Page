import React from 'react';

import styled from 'styled-components';

// Styles
const Title = styled.h4`
    font-weight: 40px;
    margin: 5px;
    text-transform: uppercase
`;

const LogoTitle = ({ title }) =>
    (
        <Title>{title}</Title>
    );

export default LogoTitle;