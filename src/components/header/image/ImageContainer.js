import React from 'react';
import logo from '../../../img/logo.svg';
import styled from 'styled-components';

// Components
import Img from '../../ui/Img';

// Styles
const ImageWrapper = styled.div`margin-right: 7px;`;

const ImageContainer = () =>
    (
        <ImageWrapper>
            <Img
                src={logo}
                title='logo'
                alt='logo'
            />
        </ImageWrapper>
    );


export default ImageContainer;