import { StyledCheckeredBorder } from "./styles";

type CheckeredBorderProps = {
  position?: "bottom" | "top";
  className?: string;
};

const CheckeredBorder = ({
  position = "bottom",
  className,
}: CheckeredBorderProps) => {
  return <StyledCheckeredBorder $position={position} className={className} />;
};

export default CheckeredBorder;
