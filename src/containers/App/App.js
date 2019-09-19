import React from 'react';
import { Root, Routes } from 'react-static';
import styled from 'styled-components';
import 'tachyons';

import Header from './Header';
import AppWrapper from '../../theme/globalStyle';

const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 28px 16px 32px 16px;
  background-color: #fff;
  border-bottom: 1px solid #DCDCDC;
  box-shadow: 0px 6px 12px 0px rgba(50,50,50,0.1);
  height: 100vh;
`

const App = () => (
  <Root>
    <AppWrapper />
    <Container>
      <Header />
      <section className="mh4">
        <Routes />
      </section>
    </Container>
  </Root>
)

export default App
