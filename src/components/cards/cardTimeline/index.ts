import styled from "styled-components"
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 350px;

  .thumb {
    border-radius: 6px;
    object-fit: cover;
    user-select: none;
    pointer-events: none;
  }
`;

export const Author = styled(motion.div)`
  padding-top: 8px; 
  
  .img-author {
    border-radius: 50%;
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
`;

export const TextAuthor = styled(motion.div)`
  color: #AAAAAA;
  display: flex;
  align-items: center;
  gap: 6px;

  .link {
    background: red;
    padding: 5px 10px;
    border-radius: 4px;
    font-weight: 600;
  }
`;