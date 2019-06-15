import React from 'react';
import styled from 'styled-components';

// Components
import IntroText from './IntroText';
import Cta from './Cta';

// Styles
const IntroWrapper = styled.div`
    flex: 1;
    @media screen and (max-width: 1024px){
        text-align: center;
        margin-top: 5vh;
    }
`;

const Introduction = () =>
    (
        <IntroWrapper>
            <IntroText />
            <Cta />
        </IntroWrapper>
    );


export default Introduction;