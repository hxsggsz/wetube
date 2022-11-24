import { GetStaticProps, NextPage } from "next";
import config from '../../config.json'
import { Menu } from "../components/menu/menu"
import { Header } from "../components/header/header";
import { Banner } from "../components/banner/banner";
import Timeline from "../components/timeline/timeline";
import Favorite from "../components/favorites/favorites";
import { createContext, useEffect, useState } from "react";
import videoService, { supabase } from "../services/videoService";
import axios from "axios";

interface Props {
  res: {
    login: string,
    bio: string,
    avatar_url: string
  }
}

export const SearchContext = createContext({})

const Home: NextPage<Props> = ({ res }: Props) => {
  const service = videoService()
  const [valorDoFiltro, setValorDoFiltro] = useState('')
  const [playlists, setPlaylists] = useState({});

  function handleVideos() {
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
  }

  useEffect(() => {
    supabase
      .from('video')
      .on('INSERT', (payload) => handleVideos()) //atualiza os videos na timeline
      .subscribe()

    handleVideos()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   handleVideos() //mostra os videos na timeline
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <SearchContext.Provider value={{ valorDoFiltro, setValorDoFiltro }}>
      <div >
        <Menu />
        <Banner image={config.banner} />
        <Header login={res.login} bio={res.bio} avatar_url={res.avatar_url} />
        <Timeline playlists={playlists} />
        <Favorite thumb={""} name={""} favorites={config.favorites} />
      </div>
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
