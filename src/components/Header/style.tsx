import styled from 'styled-components';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.yellow};
  text-align: center;
`;

export const Menu = styled(IoIosMenu)`
  color: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;
