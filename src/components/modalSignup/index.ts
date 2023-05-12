import { motion } from "framer-motion";
import styled from "styled-components";

export const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

export const Label = styled.label`
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 4px;
  width: 100%;
  background: red;
  border: none;
  color: ${({theme}) => theme.title};
  text-align: center;
`;

export const InputFile = styled.input`
  display: none;
`;

export const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;