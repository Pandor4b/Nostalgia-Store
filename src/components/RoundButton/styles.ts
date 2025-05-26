import styled, { css } from "styled-components";

export const Button = styled.button<{
  variant?: "default" | "outline";
  color?: "coral" | "green" | "yellow" | "dark";
  $fullWidth?: boolean;
}>`
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 30px;
  border: 2px solid ${(props) => props.theme.colors.darkText};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 0.5rem;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};

  background-color: ${({ theme, color, variant }) =>
    variant === "outline"
      ? "transparent"
      : color === "green"
      ? theme.colors.green
      : color === "yellow"
      ? theme.colors.yellow
      : color === "dark"
      ? theme.colors.darkText
      : theme.colors.coral};

  color: ${({ theme, color, variant }) =>
    variant === "outline"
      ? theme.colors.darkText
      : color === "dark"
      ? theme.colors.lightText
      : theme.colors.darkText};

  ${(props) =>
    props.variant === "outline" &&
    css`
      border: 2px solid ${props.theme.colors.darkText};
      background-color: transparent;
      color: ${props.theme.colors.darkText};
      &:hover {
        background-color: ${props.theme.colors.darkText};
        color: ${props.theme.colors.lightText};
      }
    `}

  &:hover {
    background-color: ${(props) => props.theme.colors.darkText};
    color: ${(props) => props.theme.colors.lightText};
    transform: translateY(-2px);
  }
`;
