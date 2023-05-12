import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from ".";
import { Loading } from "../loading/loading";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isLoading?: boolean
}

export const Button = ({ children, isLoading, ...props }: IButton) => (
  <StyledButton {...props}>{isLoading ? <Loading /> : children}</StyledButton>
)