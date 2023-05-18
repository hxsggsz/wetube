import Link from "next/link";
import * as style from '.'
import { useEffect, useState } from 'react';
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
import { Search } from "../search/search";
import { SearchButton } from "../button/searchButton";
import { supabase } from "../../services/videoService";

interface Video {
  id: number
  title: string
  category: string
  url: string
}

export const Menu: React.FC = () => {
  const { user } = useAuth()
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [searchContent, setSearchContent] = useState<Video[]>([])
  const state = useSelector((state: RootState) => state.sliceAuthModal)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getSearchContent()
  }, [search])

  async function getSearchContent() {
    const { data } = await supabase.from('video').select('*')
    console.log(data, search)
    if (data) {
      const filteredVideo = data.filter(videos => videos.title.includes(search))
      setSearchContent(filteredVideo)
    }
  }

  return (
    <>
      <style.menu>
        <Link href='/'>
          <LogoDesktop />
          <LogoMobile />
        </Link>

        <div style={{ position: "relative" }}>
          <form style={{ display: "flex", width: "100%" }}>
            <Search value={search} onChange={(ev) => setSearch(ev.currentTarget.value)} />
            <SearchButton />
          </form>
          {search !== "" && (
            <style.AutoComplete>
              {searchContent.length !== 0 ? (
                searchContent.map(video => (
                  
                  <style.AutoCompleteItem key={video.id}>
                    <Link href={{ pathname: `/v/${video.url.match("(?<=v=).+")}`, query: { category: video.category, i: video.id } }}>
                      {video.title}
                    </Link>
                  </style.AutoCompleteItem>
                
                ))
              ) : "video não-encontrado"}
            </style.AutoComplete>
          )}
        </div>

        {user || isLoading ? <AvatarMenu /> : (
          <>
            <MenuBurger />
            <style.ButtonsWrapper>
              <style.login onClick={() => dispatch(handleShowLogIn())}>Log In</style.login>
              <Button onClick={() => dispatch(handleShowSignUp())}>Sign Up</Button>
            </style.ButtonsWrapper>
          </>
        )}
      </style.menu >

      <AnimatePresence>
        {state.isLogInOpen && <ModalLogin />}
        {state.isSignUpOpen && <ModalSignUp />}
      </AnimatePresence>
    </>
  );
}