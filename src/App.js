import React from 'react';
import styled from 'styled-components';
import './App.css';

// Components
import Header from './components/header';
import Presentation from './components/presentation';

// Styles
const AppContainer = styled.div ``;

const App = () => (
  <AppContainer>
    <Header /> 
    <Presentation /> 
  </AppContainer>
);

export default App;