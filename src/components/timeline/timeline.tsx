import { StyledTimeline } from ".";
import { useContext, useEffect, useRef } from "react";
import { SearchContext } from '../../pages';
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface TimelineProps {
  playlists: {}
}

function Timeline({ ...props }: TimelineProps) {
  const { valorDoFiltro }: any = useContext(SearchContext)
  const playlistNames = Object.keys(props.playlists);

  return (

    <StyledTimeline>
      {playlistNames.map((playlistName, index) => {
        const videos = props.playlists[playlistName];
        return (
          <AnimatePresence key={index}>
            <motion.section
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <h2>videos</h2>
              <div>
                {videos
                  .filter((video) => {
                    const titleNormalized = video.title.toLowerCase()
                    const searchValueNormalized = valorDoFiltro.toLowerCase()
                    return titleNormalized.includes(searchValueNormalized)
                  })
                  .map((video) => {
                    const regex = new RegExp("(?<=v=).+");
                    const videoId = video.url.match(regex);
                    return (
                      <Link key={video.url} href={{
                        pathname: `/video`,
                        query: {
                          id: videoId,
                          title: video.title
                        }
                      }}>
                        <img src={video.thumb} />
                        <span>
                          {video.title}
                        </span>
                      </Link>
                    )
                  })}
              </div>
            </motion.section>
          </AnimatePresence>
        )
      })}
    </StyledTimeline>
  )
}

export default Timeline