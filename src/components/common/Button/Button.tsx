import { MouseEventHandler, ReactNode } from "react";
import { StyledButton } from "./ButtonStyle";

type ButtonProps = {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  width: number;
  height: number;
  bgColor?: string;
  color: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function Button({ children, type, width, height, bgColor, color, onClick }: ButtonProps) {
  return (
    <StyledButton
      type={type}
      width={width}
      height={height}
      bgColor={bgColor}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
