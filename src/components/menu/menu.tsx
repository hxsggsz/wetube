import Logo from './logo';
import Link from "next/link";
import * as style from '.'
import { useContext, useState } from 'react';
import { SearchContext } from '../../pages';
import { Search } from '../search/search';
import ThemeSwitch from '../themeSwitch/themeSwitch';
import { Button } from '../button/button';
import { ModalLogin } from '../modalLogIn/login';
import { AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { ModalSignUp } from '../modalSignup/signup';
import { AvatarMenu } from '../avatarMenu/AvatarMenu';

export const Menu: React.FC = () => {
  const { user } = useAuth()
  const { valorDoFiltro, setValorDoFiltro }: any = useContext(SearchContext)
  const [login, setLogin] = useState(false)
  const [signup, setSignUp] = useState(false)

  return (
    <>
      <style.menu>
        <Link href='/'>
          <Logo />
        </Link>
        {/* <Search value={valorDoFiltro} onChange={(e) => setValorDoFiltro(e.target.value)} /> */}
        {/* <ThemeSwitch /> */}
        <style.buttons>
          {!user ? <>
            <style.login onClick={() => setLogin(prev => !prev)}>Log In</style.login>
            <Button onClick={() => setSignUp(prev => !prev)}>Sign Up</Button>
          </>
            : <AvatarMenu />}
          
        </style.buttons>
      </style.menu>

      <AnimatePresence>
        {login && <ModalLogin setLogin={setLogin} />}
        {signup && <ModalSignUp setSignUp={setSignUp} />}
      </AnimatePresence>
    </>
  );
}