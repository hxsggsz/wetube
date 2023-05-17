import styled from "styled-components";

export const NotFound = styled.div`
  margin-top: 4rem;
  gap: 20px;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    width: 40vw;
    text-align: center;
    border-radius: 6px;
    background: red;
    font-size:24px;
    padding: 8px 10px;
    font-weight: 600;
  
    @media (max-width: 768px) {
      width: 90vw;
    }
  }
`;