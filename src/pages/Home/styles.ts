import styled from 'styled-components';

export const Wrapper = styled.div`
  /* padding-top: 70px; */
  /* padding: 2rem; */
  background-color: ${({ theme }) => theme.colors.cream || '#fff'};
  /* min-height: 100vh; */
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.red};  
  background-color: ${({ theme }) => theme.colors.vanilla};
`;  