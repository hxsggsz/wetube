import axios from "axios";
import config from '../../config.json'
import { createContext, useState } from "react";
import { GetStaticProps, NextPage } from "next";
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
      <Banner image={config.banner} />
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
