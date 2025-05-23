import React from "react";
import * as S from "./styles.ts";

type Props = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ children, onClick }: Props) {
  return <S.ButtonContainer onClick={onClick}>{children}</S.ButtonContainer>;
}

export default Button;
