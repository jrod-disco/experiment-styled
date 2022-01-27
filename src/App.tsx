import React from 'react';
import './App.css';

import { ThemeProvider } from 'styled-components';
import { theme, lightTheme, darkTheme } from './themes/defaultTheme';

import { Backdrop } from './components/Backdrop';
import { OuterContainer } from './components/OuterContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
          <OuterContainer>
            <Backdrop />
            <Backdrop themeOverride={{ bg: 'green' }} />
          </OuterContainer>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
