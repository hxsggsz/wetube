import styled from "styled-components";

export const StyledIframe = styled.iframe`
  width: 60vw;
  height: 70vh;
  display: flex;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100vw;
    height: 60vh;
    margin-top: 0;
  }
`;