import { motion } from "framer-motion";
import styled from "styled-components";

export const root = styled.div`
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const container = styled(motion.div)`
  border-radius: 8px;
  width: 425px;
  height: 80vh;
  background-color: ${({ theme }) => theme.backgroundLevel2};
  position: relative;
  /* z-index: 99999999; */
  padding: 16px;
  padding-top: 40px;

  @media (max-width: 488px) {
    max-width: 95%;
  }
`;

export const close = styled.div`
  position: absolute;
  top: 15px;
  right: 16px;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    color: red;
  }
  
  &:active {
    color: ${({ theme }) => theme.backgroundLevel1};
  }
`;

export const content = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;