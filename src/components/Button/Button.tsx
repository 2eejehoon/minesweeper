import { MouseEventHandler, ReactNode } from "react";
import { StyledButton } from "./ButtonStyle";

type ButtonProps = {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, type, onClick }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
