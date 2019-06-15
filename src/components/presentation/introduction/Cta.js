import React from 'react';
import styled from 'styled-components';

// Components
import Button from '../../ui/Button';

// Styles
const CtaWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
`;

const Cta = () =>
    (
        <CtaWrapper>
            <Button title="14 Inch" />
            <Button title="Add To Cart" />
        </CtaWrapper>

    );

export default Cta;