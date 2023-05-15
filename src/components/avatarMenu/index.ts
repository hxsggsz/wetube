import styled from 'styled-components';
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const AvatarRoot = styled(Avatar.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
  border-radius: inherit;
  border: 2px solid red;

  &:hover {
    opacity: 0.8;
    transition: opacity 250ms ease-in-out;
  }
`;

const StyledTrigger = styled(DropdownMenuPrimitive.Trigger)`
`;

const StyledPortal = styled(DropdownMenuPrimitive.Portal)``;

const StyledContent = styled(DropdownMenuPrimitive.Content)`
  min-width: 220px;
  background-color: ${({ theme }) => theme.backgroundLevel2};
  border-radius: 6px;
  margin-right: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

const StyledItem = styled(DropdownMenuPrimitive.Item)`
  font-size: 16px;
  cursor: pointer;
  line-height: 1;
  color: ${({ theme }) => theme.title};
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: end;
  height: 25px;
  padding: 0 5px;
  position: relative;
  padding-left: 25px;
  user-select: none;
  outline: none;

  
  @media(max-width: 768px) {
    padding: 20px 5px;
  }

  &:focus {
    background: red;
  }
`;

export const AvatarRootStyled = AvatarRoot
export const AvatarImageStyled = AvatarImage
export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuPortal = StyledPortal
export const DropdownMenuTrigger = StyledTrigger
export const DropdownMenuContent = StyledContent
export const DropdownMenuItem = StyledItem
