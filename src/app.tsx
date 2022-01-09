import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Provider as PaperProvider} from 'react-native-paper';
import Navigator from './navigator';
import theme from './theme';

function App() {
  return (
    <>
      <PaperProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Navigator />
        </ThemeProvider>
      </PaperProvider>
    </>
  );
}

export default App;
