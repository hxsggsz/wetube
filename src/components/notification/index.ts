import { motion } from "framer-motion";
import styled from "styled-components";

export const RootStyle = styled(motion.div)`
  width: 100%;
  max-width: 20%;
  position: fixed;
  bottom: 5%;
  left: 3%;
  background-color: #fae1e3;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 6px;
  z-index: 999;
  @media (max-width: 768px) {
    max-width: 30%;
  }
  @media (max-width: 612px) {
    max-width: 50%;
  }
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
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
`;

export const TimerStyled = styled(motion.div)`
  position: relative;
  top: 0;
  left: -30px;
  width: 20px;
  box-shadow: 0 5px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 1px;
  background: ${({ theme }) => theme.backgroundBase};
`;

export const BodyStyled = styled.div`
  & > div {
    height: 7px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }

  p {
    color: #111112;
    font-weight: 600;
    text-align: center;
  }
`;
