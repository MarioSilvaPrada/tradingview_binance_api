import React, { FC } from 'react';
import * as S from './style';
import {
  IoIosSettings,
  IoIosPerson,
  IoIosChatboxes,
  IoIosStar,
} from 'react-icons/io';

interface Props {
  isVisible: boolean;
}

const Menu: FC<Props> = ({ isVisible }) => {
  const menuOptions = [
    { Icon: IoIosPerson, text: 'Profile' },
    { Icon: IoIosStar, text: 'Favorites' },
    { Icon: IoIosChatboxes, text: 'Customer Service' },
    { Icon: IoIosSettings, text: 'Settings' },
  ];
  return (
    <S.Container isVisible={isVisible}>
      <S.OptionsWrapper>
        {menuOptions.map(({ Icon, text }) => (
          <S.StyledButton key={text}>
            <Icon size={40} color='#e0bb20' />
            <p>{text}</p>
          </S.StyledButton>
        ))}
      </S.OptionsWrapper>
    </S.Container>
  );
};

export default Menu;
