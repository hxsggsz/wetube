import { StyledTimeline } from ".";
import { useContext } from "react";
import { SearchContext } from '../../pages';

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
          <section key={index}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase()
                  const searchValueNormalized = valorDoFiltro.toLowerCase()
                  return titleNormalized.includes(searchValueNormalized)
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>
                        {video.title}
                      </span>
                    </a>
                  )
                })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
export default Timeline