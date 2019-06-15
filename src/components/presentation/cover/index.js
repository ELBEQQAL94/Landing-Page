import React from 'react';
import styled from 'styled-components';
import matebook from '../../../img/matebook.png';

// Components
import Img from '../../ui/Img';

// Styles 
const CoverWrapper = styled.div`
    flex: 1;
`;

const Cover = () =>
    (
        <CoverWrapper>
            <Img
                src={matebook}
                title='matebook'
                alt="matebook"
                size='60vh'
            />
        </CoverWrapper>
    );

export default Cover;