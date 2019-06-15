import React from 'react';
import styled from 'styled-components';

// Components
import Introduction from './introduction';
import Cover from './cover';

// Styles
const PreWrapper = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    min-height: 80vh;
    align-items: center;
    @media screen and (max-width: 1024px){
        flex-direction: column
    }
`;

const Presentation = () =>
    (
        <PreWrapper>
            <Introduction />
            <Cover />
        </PreWrapper>
    );

export default Presentation;