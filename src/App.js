import React from 'react';
import { Router } from '@reach/router';

import Recipes from './modules/Recipes';
import ThemeProvider from '../../../Desktop/originaloreganoFrontEndCodeChallenge/src/styles/ThemeProvider';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => (
  <ThemeProvider>
    <Header />
    <Body>
      <Router>
        <Recipes path="/" />
      </Router>
    </Body>
    <Footer />
  </ThemeProvider>
);

export default App;
