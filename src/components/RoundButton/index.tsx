import React from "react";
import * as S from "./styles";

type RoundButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "default" | "outline";
  color?: "coral" | "green" | "yellow" | "dark";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  disabled?: boolean;
};

const RoundButton: React.FC<RoundButtonProps> = ({
  children,
  onClick,
  variant = "default",
  color = "coral",
  fullWidth = false,
  type = "button",
  style,
  disabled = false,
}) => {
  return (
    <S.Button
      onClick={disabled ? undefined : onClick}
      variant={variant}
      color={color}
      $fullWidth={fullWidth}
      type={type || "button"}
      style={style}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
};

export default RoundButton;
