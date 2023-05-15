import styled from "styled-components"

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  width: 40vw;
  padding: 4px 6px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.textColorBase};
  background-color: ${({ theme }) => theme.backgroundBase};
`;

export const SearchButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.backgroundLevel2};
  box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
  border-left: 1px solid ${({ theme }) => theme.borderBase};
  padding: 10px 20px;
`;