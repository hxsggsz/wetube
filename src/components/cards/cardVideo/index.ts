import styled from "styled-components"

export const CardWrapper = styled.div`
  display: flex;
  gap: 8px;
  

  .thumb {
    border-radius: 6px;
    object-fit: cover;
    min-width: 220px;
  }
`;

export const CardInfo = styled.section`
  align-items: center;
  display: flex;
  gap: 6px;
  margin-top: 10px;
  color: #aaaaaa;
  
  img {
    border-radius: 9999px;
    object-fit: cover;
  }
`;