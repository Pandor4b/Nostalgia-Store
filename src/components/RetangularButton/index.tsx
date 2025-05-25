import React from "react";
import * as S from "./styles.ts";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: 'default' | 'outline';
};

function RetantugarButton({ children, onClick, variant = 'default' }: ButtonProps) {
  return <S.ButtonContainer onClick={onClick} variant={variant}>{children}</S.ButtonContainer>;
}

export default RetantugarButton;
