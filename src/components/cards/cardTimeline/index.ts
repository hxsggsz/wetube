import styled from "styled-components"
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 365px;
  transition: all 250ms ease-in-out;
  margin-top: 10px;

  &:hover {
    border-right: 4px solid red;
    border-bottom: 4px solid red;
    border-radius: 12px;
  }

  .thumb {
    border-radius: 12px;
    object-fit: cover;
    user-select: none;
    pointer-events: none;
  }
`;

export const Author = styled(motion.div)`
  padding-top: 8px; 
  
  .img-author {
    border-radius: 50%;
    user-select: none;
    pointer-events: none;
  }
`;

export const WrapperInfo = styled(motion.div)`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const TextInfo = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .link {
    background: red;
    padding: 8px 10px;
    border-radius: 4px;
    font-weight: 600;
    text-align: center;
    width: 90%;
    margin-bottom: 4px;
    margin-left: 8px;
  }
`;

export const TextAuthor = styled(motion.div)`
  color: #AAAAAA;
  display: flex;
  align-items: center;
  gap: 6px;
`;