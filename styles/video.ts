import styled from "styled-components";

export const Video = styled.div`
  margin-left: 25px;
  margin-top: 70px;
  gap: 20px;
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  & h1 {
    max-width: 100%;
    font-size: 1.5rem;
  }

  .authorImg {
    border-radius: 9999px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    flex-direction: column;
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Info = styled.div`
  margin-top: 20px;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const AuthorName = styled.p`
  color: #aaaaaa;
  font-size: 16px;
  font-weight: 600;
`;

export const SideVideos = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 16px;

  @media (max-width: 768px) {
    margin-left: 16px;
    margin-top: 3rem;
  }
`;