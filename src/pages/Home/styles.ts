import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 70px;
  background-color: ${({ theme }) => theme.colors.cream};
  position: relative;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.red};  
  background-color: ${({ theme }) => theme.colors.vanilla};
`;