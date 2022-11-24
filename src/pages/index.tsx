import axios from "axios";
import config from '../../config.json'
import { Menu } from "../components/menu/menu"
import { createContext, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import { Header } from "../components/header/header";
import { Banner } from "../components/banner/banner";
import Timeline from "../components/timeline/timeline";
import Favorite from "../components/favorites/favorites";

interface Props {
  res: {
    login: string,
    bio: string,
    avatar_url: string
  }
}

export const SearchContext = createContext({})

const Home: NextPage<Props> = ({ res }: Props) => {
  const [valorDoFiltro, setValorDoFiltro] = useState('')

  return (
    <SearchContext.Provider value={{ valorDoFiltro, setValorDoFiltro }}>
      <Menu />
      <Banner image={config.banner} />
      <Header login={res.login} bio={res.bio} avatar_url={res.avatar_url} />
      <Timeline />
      <Favorite thumb={""} name={""} favorites={config.favorites} />
    </SearchContext.Provider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('https://api.github.com/users/hxsggsz')

  return {
    props: {
      res: res.data
    },
  }
}

export default Home;
