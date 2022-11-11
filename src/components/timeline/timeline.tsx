import { StyledTimeline } from ".";
import { useContext } from "react";
import { SearchContext } from '../../pages';
import { useRouter } from "next/router";
import Link from "next/link";

interface TimelineProps {

  playlists: {}
}

function Timeline({ ...props }: TimelineProps) {
  const router = useRouter()
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
          </section>
        )
      })}
    </StyledTimeline>
  )
}
export default Timeline