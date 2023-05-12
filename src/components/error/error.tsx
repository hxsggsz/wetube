import { ReactNode } from "react";
import { StyledError } from ".";

export const Error = ({children}: {children: ReactNode}) => (
  <StyledError>{children}</StyledError>
)