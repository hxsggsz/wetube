import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledTimelineWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  width: 98vw;
  padding: 30px 10px;
  overflow: hidden;
  
  @media (max-width: 430px) {
    width: 100vw;
    margin: 0 20px 10px 55px;
  }
  
  @media (max-width: 395px) {
    margin: auto;
    margin-left: 70px;
  }
  `;

export const StyledCategory = styled(motion.div)`
  h1 {
    margin-bottom: 6px;
    margin-top: 4rem;
  }

  span {
    color: red;
  }
 `;

export const StyledTimeline = styled(motion.div)`
  display: flex;
  gap: 20px;
`;
