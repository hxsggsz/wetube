import styled from "styled-components"

export const Wrapper = styled.section`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1::after {
    content: "";
    display: block;
    height: 3px;
    width: 100%;
    background: red;
  }
`;

export const Video = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;