import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper';
// import { I18nextProvider } from 'react-i18next';
import Navigator from './navigator';
import theme from './theme';
// import i18n from './locales';



function App() {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#fff" /> */}

          <PaperProvider theme={theme}>
            <ThemeProvider theme={theme}>
              {/* <I18nextProvider i18n={i18n}> */}
                <Navigator />
  
              {/* </I18nextProvider> */}
            </ThemeProvider>
          </PaperProvider>
    </>
  );
}

export default App;
