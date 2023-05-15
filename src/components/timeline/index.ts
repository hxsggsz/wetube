import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledTimelineWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  width: 100vw;
  margin: 0 0 10px 40px;
  
  @media (max-width: 430px) {
    margin: 0 0 10px 80px;
  }
  `;

export const StyledCategory = styled(motion.div)`
 h1 {
  margin-bottom: 6px;
 }
`;

export const StyledTimeline = styled(motion.div)`
  display: flex;
  gap: 20px;
`;
