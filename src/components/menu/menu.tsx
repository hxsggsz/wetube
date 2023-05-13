import Link from "next/link";
import * as style from '.'
import { useState } from 'react';
import { Search } from '../search/search';
import { Button } from '../button/button';
import { ModalLogin } from '../modalLogIn/login';
import { AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { ModalSignUp } from '../modalSignup/signup';
import { AvatarMenu } from '../avatarMenu/AvatarMenu';
import LogoDesktop from './logoDesktop';
import LogoMobile from "./logoMobile";
import { MenuBurger } from "./menuBurger/MenuBurger";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { handleShowLogIn, handleShowSignUp } from "../../redux/authModal";

export const Menu: React.FC = () => {
  const { user } = useAuth()
  const state = useSelector((state: RootState) => state.sliceAuthModal)
  const dispatch = useDispatch()

  return (
    <>
      <style.menu>
        <Link href='/'>
          <LogoDesktop />
          <LogoMobile />
        </Link>
        <Search />
        <style.buttons>
          {!user ? <>
            <style.ButtonsWrapper>
              <MenuBurger />
              <style.login onClick={() => dispatch(handleShowLogIn())}>Log In</style.login>
              <Button onClick={() => dispatch(handleShowSignUp())}>Sign Up</Button>
            </style.ButtonsWrapper>
          </>
            : <AvatarMenu />}
        </style.buttons>
      </style.menu >

      <AnimatePresence>
        {state.isLogInOpen && <ModalLogin />}
        {state.isSignUpOpen && <ModalSignUp />}
      </AnimatePresence>
    </>
  );
}