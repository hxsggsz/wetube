import styled from "styled-components"

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: end;
  border-radius: 2px;
  overflow: hidden;
  max-width: 425px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.borderBase};
  `;

export const SearchInput = styled.input`
  width: 40vw;
  padding: 4px 6px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.textColorBase};
  background-color: ${({ theme }) => theme.backgroundBase};
`;