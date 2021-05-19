import React, { useState, FC } from 'react';

import * as S from './App.styled';
import ChartContainer from './components/ChartContainer';
import Menu from './components/Menu';
import Header from './components/Header';

const App: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Menu isVisible={isMenuOpen} />
      <S.Container isOpen={isMenuOpen}>
        <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <ChartContainer />
      </S.Container>
    </>
  );
};

export default App;
