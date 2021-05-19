import styled from 'styled-components';

type Props = {
  isVisible: boolean;
};

export const Container = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6rem;
  background: ${({ theme }) => theme.colors.background};
  transition: 0.5s;
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '-6rem')});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  p {
    color: white;
    font-size: 0.9rem;
    margin: 0;
  }
`;

export const OptionsWrapper = styled.div`
  width: 50rem;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;
