import styled from "styled-components";
import * as Select from '@radix-ui/react-select';

export const Trigger = styled(Select.Trigger)`
  width: 95%;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 4px 10px;
  font-weight: 700;
  line-height: 1;
  height: 35px;
  background: ${({ theme }) => theme.backgroundBase};
  color: ${({ theme }) => theme.title};
  overflow-x: hidden;
`;

export const Content = styled(Select.Content)`
  overflow: hidden;
  border-radius: 6px;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const Item = styled(Select.Item)`
  cursor: pointer;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.textColorBase};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  margin-left: 10px;
  width: 98%;
  padding: 20px 35px 20px 25px;
  position: relative;
  background: ${({ theme }) => theme.backgroundBase};
  user-select: none;

  &:focus {
    outline: none;
    background: red;
  }
`;