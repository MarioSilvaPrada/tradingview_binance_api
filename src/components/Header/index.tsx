import React, { FC } from 'react';
import * as S from './style';

interface Props {
  setIsMenuOpen: (bool: boolean) => void;
  isMenuOpen: boolean;
}

const Header: FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <>
      <S.Header>
        <S.Menu size={40} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <S.Title>BinanceAPI</S.Title>
      </S.Header>
    </>
  );
};

export default Header;
