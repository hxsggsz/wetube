import { InputHTMLAttributes, useState } from "react";
import { StyledSearch } from ".";
import { SearchContext } from "../../pages";

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Search: React.FC<SearchProps> = ({ ...props }: SearchProps) => {

  return (
    <StyledSearch>
      <input type="text" {...props} />
      <button>
        🔎
      </button>
    </StyledSearch  >
  )
}