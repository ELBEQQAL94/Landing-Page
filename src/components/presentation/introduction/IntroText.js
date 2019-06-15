import React from 'react';
import styled from 'styled-components';

// Styles
const IntroTextWrapper = styled.div``;
const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
  padding: 7px;
  @media screen and (max-width: 1024px){
    font-size: 20px
}
`;
const Desc = styled.p`
  margin-top: 7px;
  font-size: 22px;
  color: gray;
  padding: 7px;
  @media screen and (max-width: 1024px){
    font-size: 16px
}
  `;

const IntroText = () =>
  (
    <IntroTextWrapper>
      <Title>
        Laptop for the future
           </Title>
      <Desc>
        The new 14 inch bezeless display oferring 4k
        display with touch screen.
           </Desc>
    </IntroTextWrapper>
  );

export default IntroText;