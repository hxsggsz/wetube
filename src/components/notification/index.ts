import { motion } from "framer-motion";
import styled from "styled-components";

export const RootStyle = styled(motion.div)`
  width: 100%;
  max-width: 20%;
  position: fixed;
  bottom: 3%;
  left: 3%;
  background-color: #fae1e3;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 6px;
  z-index: 999;
`;

export const TitleStyle = styled.div`
  color: #fff;
  width: 100%;
  padding: 2%;
  border-radius: 6px 6px 0 0;
  padding-left: 10px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  text-align: center;
  background: red;

  & > h1 {
    margin: 5px;
  }
`;

export const CloseIcon = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  padding: 6px;
  cursor: pointer;
`;

export const BodyStyled = styled.div`
  height: 50px;
  align-items: center;
  display: flex;
  p {
    color: #111112;
    font-weight: 400;
    text-align: center;
  }
`;
