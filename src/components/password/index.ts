import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.backgroundBase};
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;  
`;

export const Form = styled.form`
  width: 425px;
  margin-top: 100px;

  @media (max-width: 443px) {
    max-width:95vw;
  }
`;