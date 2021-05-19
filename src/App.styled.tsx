import styled from 'styled-components';
import { IoIosMenu } from 'react-icons/io';

type Props = {
  isOpen: boolean;
};

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  height: ${({ isOpen }) => (isOpen ? 'calc(100vh - 6rem)' : '100vh')};
  background: ${({ theme }) => theme.colors.mainBackground};
  align-items: center;
  padding: 0 2rem;
  transition: 0.5s;
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? '6rem' : '0')};
  right: 0;
  bottom: 0;
  left: 0;
`;

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
  width: 100%;
`;
