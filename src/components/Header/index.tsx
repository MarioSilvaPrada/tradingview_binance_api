import { FC } from 'react';
import * as S from './style';

import { IoIosCloseCircle } from 'react-icons/io';

interface Props {
  setIsMenuOpen: (bool: boolean) => void;
  isMenuOpen: boolean;
}

const Header: FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <>
      <S.Header>
        <S.Title>BinanceAPI</S.Title>

        <S.Menu
          as={isMenuOpen ? IoIosCloseCircle : ''}
          size={40}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </S.Header>
    </>
  );
};

export default Header;
