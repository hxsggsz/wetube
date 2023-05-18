import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  border: none;
  border-radius: 2px;
  white-space: nowrap;
  cursor: pointer;
  color: ${({ theme }) => theme.textColorBase};
  font-size: 16px;
  font-weight: 600;
  transition: all 250ms ease-in-out;
  float: right;

  @media (max-width: 768px) {
    width: 92%;
    margin-top: 8px;
  }

  &:hover {
    background: ${({ theme }) => theme.textColorBase};
    color: ${({ theme }) => theme.backgroundBase};
  }
  
  &:active {
    background: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};
  }
  
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.textColorBase};
    background: ${({ theme }) => theme.backgroundLevel1};
  }
`;

export const StyledSearchButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.backgroundLevel2};
  box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
  border-left: 1px solid ${({ theme }) => theme.borderBase};
  padding: 10px 20px;
`;