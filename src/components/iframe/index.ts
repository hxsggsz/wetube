import styled from "styled-components";

export const StyledIframe = styled.iframe`
  width: 70vw;
  height: 80vh;
  border-radius: 10px;
  margin-top: 40px;
  @media (max-width: 768px) {
    width: 100vw;
    height: 60vh;
    margin-top: 0;
  }
  `;

export const StyledVideo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  & h1 {
    max-width: 100%;
  }
`;
