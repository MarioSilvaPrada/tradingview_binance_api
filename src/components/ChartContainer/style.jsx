import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  width: 90%;
  align-items: center;
  border: 2px solid;
  border-radius: 1rem;
  margin-top: 3rem;
`;

export const Chart = styled.div`
  height: 60vh;
  width: 100%;
`;
