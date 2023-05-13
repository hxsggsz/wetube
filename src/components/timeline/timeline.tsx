import { StyledTimeline } from ".";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "../../services/videoService";

interface Video {
  id: number
  thumb: string
  title: string
  url: string
}

function Timeline() {
  const [playlists, setPlaylists] = useState<Video[]>([]);

  useEffect(() => {
    async function newTimeline() {
      const { data: video } = await supabase.from('video').select('*')

      if (video) { setPlaylists(video) }
    }
    supabase
      .from('video')
      .on('INSERT', (payload) => newTimeline()) //atualiza os videos na timeline
      .subscribe()

    newTimeline() // mostra a timeline
  }, [])

  return (
    <StyledTimeline>
      {playlists
        // .filter((video) => {
        //   const titleNormalized = video.title.toLowerCase()
        //   const searchValueNormalized = valorDoFiltro.toLowerCase()
        //   return titleNormalized.includes(searchValueNormalized)
        // })
        .reverse()
        //como os videos são inseridos em um array, o video adicionado sempre fica por ultimo, revertendo o array, ele primeiro a aparecer em tela.
        .map((playlist) => {
          const regex = new RegExp("(?<=v=).+");
          const playlistId = playlist.url.match(regex);
          return (
            <AnimatePresence key={playlist.id}>
              <motion.section
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
              >

                <Link href={{
                  pathname: `/video`,
                  query: {
                    id: playlistId,
                    title: playlist.title
                  }
                }}>
                  <img src={playlist.thumb} />
                  <span>
                    {playlist.title}
                  </span>
                </Link>
                )
              </motion.section>
            </AnimatePresence>
          )
        })}
    </StyledTimeline>
  )
}

export default Timeline