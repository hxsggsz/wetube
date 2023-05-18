import { InputHTMLAttributes, useState } from "react";
import * as style from ".";

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> { }

export const Search = ({ ...props }: SearchProps) => {
  return (
    <style.SearchWrapper>
      <style.SearchInput type="text" {...props} />
    </style.SearchWrapper  >
  )
}