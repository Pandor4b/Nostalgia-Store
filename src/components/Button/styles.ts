import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme.colors.darkText};
  color: white;
  font-weight: 600;
  padding: 8px 0;
  font-size: 14px;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.coral};
  }
`;
