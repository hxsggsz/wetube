import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: ${({ theme }) => theme.textColorBase};
  font-size: 16px;
  font-weight: 600;
  transition: all 250ms ease-in-out;
  float: right;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    background: ${({ theme }) => theme.textColorBase};
    color: ${({ theme }) => theme.backgroundBase};
  }
  
  &:active {
    background: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};
  }
`;