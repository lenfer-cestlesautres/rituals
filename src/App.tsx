import React from 'react';
import './App.css';
import {
	AboutUs,
	Header,
  Contacts,
  Rituals
} from './Components'
import { ThemeProvider } from 'styled-components'
import { theme } from './GlobalStyles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      {/* <AboutUs></AboutUs> */}
      {/* <Contacts></Contacts> */}
      <Rituals></Rituals>
    </ThemeProvider>
  );
}

export default App;
