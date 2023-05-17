import styled from "styled-components"

export const StyledWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.borderBase};
  width: 100%;
  padding-right: 10px;
  background-color: ${({ theme }) => theme.backgroundBase};
  display: flex;
  align-items: center;
  `;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.textColorBase};
`;