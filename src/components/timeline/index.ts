import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  margin: 0 auto;
  overflow: hidden;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 4fr));
  grid-auto-flow: row;
  grid-auto-columns: minmax(170px, 4fr);
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: 12px;
    @media (max-width: 425px) {
      max-width: 100vw;
    }
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    @media (max-width: 425px) {
      margin: 0 20px;
      font-size: 1.2rem;
    }
    div {
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(220px, 4fr));
      grid-auto-flow: row;
      grid-auto-columns: minmax(170px, 4fr);
      overflow-x: auto;
      scroll-snap-type: x mandatory;

      @media (max-width: 425px) {
        grid-auto-flow: row;
      }
      a {
        scroll-snap-align: start;
        scroll-behavior: auto;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;

          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;
