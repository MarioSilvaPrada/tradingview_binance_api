import React, { useState, FC } from 'react';

import * as S from './App.styled';
import ChartContainer from './components/ChartContainer';
import Menu from './components/Menu';

const App: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Menu isVisible={isMenuOpen} />
      <S.Container isOpen={isMenuOpen}>
        <S.Header>
          <S.Menu size={40} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          <S.Title>BinanceAPI</S.Title>
        </S.Header>
        <ChartContainer />
      </S.Container>
    </>
  );
};

export default App;
