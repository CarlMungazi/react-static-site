import React from 'react';
import { Root, Routes } from 'react-static';
import 'tachyons';

import Header from './Header';
import AppWrapper from '../../theme/globalStyle';

const App = () => (
  <Root>
    <AppWrapper />
    <Header />
      <section className="mh4">
        <Routes />
      </section>
  </Root>
)

export default App
