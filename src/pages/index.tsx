import { NextPage } from "next";
import config from '../../config.json'
import { Menu } from "../components/menu/menu"
import { Header } from "../components/header/header";
import { Banner } from "../components/banner/banner";
import Timeline from "../components/timeline/timeline";
import Favorite from "../components/favorites/favorites";
import { createContext, useState } from "react";

interface Props {
  url: string | undefined;
  thumb: string | undefined;
  title: string 
}       


export const SearchContext = createContext({})
export interface StateProps {
  valorDoFiltro: string
  setValorDoFiltro: string
}
const Home: NextPage<Props> = () => {
  const [valorDoFiltro, setValorDoFiltro] = useState('')
  return (
    <SearchContext.Provider value={{ valorDoFiltro, setValorDoFiltro }}>
      <div >
        <Menu />
        <Banner image={config.banner} />
        <Header name={config.name} job={config.job} github={config.github} />
        <Timeline playlists={config.playlists} />
        <Favorite thumb={""} name={""} favorites={config.favorites} />
      </div>
    </SearchContext.Provider>
  )
}

export default Home;
