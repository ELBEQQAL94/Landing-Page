import React from 'react';
import styled from 'styled-components';


const MyImg = ({ src, title, alt, size }) => {
  const Img = styled.img`
    height: ${size}
  `;
  return (
    <Img
      src={src}
      title={title}
      alt={alt}
    />
  );
};

export default MyImg;