import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger
} from "../../avatarMenu/index"
import { List, SignIn, UserCircle, X } from "phosphor-react";
import * as style from ".";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleShowLogIn, handleShowSignUp } from "../../../redux/authModal";

export const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      <DropdownMenu onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <style.Menu whileTap={{ rotate: 360 }} onClick={() => setIsOpen(prev => !prev)}>
            {isOpen ? <X cursor="pointer" size={30} weight="bold" /> : <List cursor="pointer" size={30} weight="bold" />}
          </style.Menu>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>

          <DropdownMenuContent sideOffset={5}>

            <DropdownMenuItem onSelect={() => dispatch(handleShowLogIn())}>
              Log In
              <UserCircle size={25} weight="bold" />
            </DropdownMenuItem>
            
            <DropdownMenuItem onSelect={() => dispatch(handleShowSignUp())}>
              Sign Up <SignIn size={25} weight="bold" />
            </DropdownMenuItem>


          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </>
  )
}