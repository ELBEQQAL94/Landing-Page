import React from 'react';

import styled from 'styled-components';

// Components
import ImageContainer from './ImageContainer';
import LogoTitle from './LogoTitle';

// styles
const LogoWrapper = styled.div`
    display: flex;
    flex: 1;
    `;

const Logo = () =>
    (
        <LogoWrapper>
            <ImageContainer />
            <LogoTitle title='logo title' />
        </LogoWrapper>
    );

export default Logo;