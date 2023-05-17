import { motion } from "framer-motion";
import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100vw;
  height: 230px;
  background: #b21700;
  position: relative;
  `;

export const UserWrapper = styled.div`
  position: absolute;
  bottom: -50%;
  display: flex;
  align-items: end;
  gap: 8px;
  
  label {
    position: absolute;
    right: 17%;
    top: 17%;
  }
`;

export const WrapperImg = styled.div`
  position: relative;
  border-radius: 9999px;
`;

export const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.backgroundBase};
  object-fit: cover;
`;

export const Username = styled(motion.div)`
  margin-bottom: 10%;
  display: flex;
  align-items: center;

  h1 {
    display: flex;
    gap: 4px; 
  }

  span {
    color: #AAAAAA;
    font-weight: 600;
  }

  .menu {
    margin-left: 6px;
  }

  .menu:hover {
    border-radius: 9999px;
    background: ${({ theme }) => theme.backgroundLevel1};
  }
`;