import styled from "styled-components";

export const StyledIframe = styled.iframe`
  width: 55vw;
  height: 70vh;
  display: flex;
  border-radius: 10px;
  margin-top: 70px;
  @media (max-width: 768px) {
    width: 100vw;
    height: 60vh;
    margin-top: 0;
  }
`;

export const StyledVideo = styled.div`
  margin-left: 25px;
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  & h1 {
    max-width: 100%;
    font-size: 1.5rem;
  }

  .authorImg {
    border-radius: 9999px;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;