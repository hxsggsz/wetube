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