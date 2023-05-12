import styled from "styled-components";

export const menu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundLevel1};
  border: 1px solid ${({ theme }) => theme.borderBase};
  align-items: center;
  padding: 0 24px;
  gap: 16px; 
  position: fixed;
  width: 100vw;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  z-index: 3;
  .logo {
    width: 100%;
    max-width: 200px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase};
    }
  }
`;

export const buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const login = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${({ theme}) => theme.textColorBase};
`;