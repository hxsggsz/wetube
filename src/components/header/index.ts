import styled from "styled-components";

export const StyledHeader = styled.div`
  img {
    width: 10vw;
    height: 20vh;
    border-radius: 50%;
    @media (max-width: 425px) {
      width: 25vw;
    }
  }
  section {
    display: flex;
    align-items: center;
  }
  div {
    margin: 0 10px;
  }
  h1 {
    font-weight: bold;
    font-size: 2rem;
  }
  span {
    font-size: 1rem;
  }
  margin: 10px 30px;
  width: 97%;
`;
