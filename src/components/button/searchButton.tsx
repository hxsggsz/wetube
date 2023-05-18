import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledSearchButton } from ".";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> { }

export const SearchButton = ({ ...props }: IButton) => (
  <StyledSearchButton {...props}>🔎</StyledSearchButton>
)