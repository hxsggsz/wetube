import { NextPage } from "next";
import config from '../../config.json'
import { Menu } from "../components/menu/menu"
import { Header } from "../components/header/header";
import { Banner } from "../components/banner/banner";

import Timeline from "../components/timeline/timeline";
import Favorite from "../components/favorites/favorites";
import { createContext, useEffect, useState } from "react";
import videoService, { supabase } from "../services/videoService";

interface Props {
  url: string | undefined;
  thumb: string | undefined;
  title: string
}

export const SearchContext = createContext({})

const Home: NextPage<Props> = () => {
  const service = videoService()
  const [valorDoFiltro, setValorDoFiltro] = useState('')
  const [playlists, setPlaylists] = useState({});


  useEffect(() => {
    service
      .getAllVideos()
      .then((dados) => {
        const novasPlaylists = {};
        dados.data?.forEach((video) => {
          if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
          novasPlaylists[video.playlist] = [
            video,
            ...novasPlaylists[video.playlist],
          ];
        });
        setPlaylists(novasPlaylists);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SearchContext.Provider value={{ valorDoFiltro, setValorDoFiltro }}>
      <div >
        <Menu />
        <Banner image={config.banner} />
        <Header name={config.name} job={config.job} github={config.github} />
        <Timeline playlists={playlists} />
        <Favorite thumb={""} name={""} favorites={config.favorites} />
      </div>
    </SearchContext.Provider>
  )
}

export default Home;
