import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import './styles/global.scss';
import Routes from './routes';

const theme = {
  primaryColor: '#707070',
  secondaryColor: '#a9c5ba',
  smallFont: '14px',
  mediumFont: '16px',
  largeFont: '30px',
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
