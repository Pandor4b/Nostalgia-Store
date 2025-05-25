import styled, {css} from 'styled-components';

type ButtonProps = {
  variant?: 'default' | 'outline';
};

export const ButtonContainer = styled.button<ButtonProps>`
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

  ${(props) =>
    props.variant === 'outline' &&
    css`
      background-color: transparent;
      color: ${props.theme.colors.darkText};
    
      &:hover {
        background-color: ${props.theme.colors.coral};
        color: white;
      }
    `}
  
`;
