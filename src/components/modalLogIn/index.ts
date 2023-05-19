import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  width: 100%;
`;

export const form = styled(motion.form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;

  button {
    padding: 10px;
  }
`;

export const resetPassword = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;