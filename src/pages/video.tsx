import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { StyledVideo } from '../components/iframe'
import { Iframe } from '../components/iframe/iframe'

const Video: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <StyledVideo>
        <Iframe src={`https://www.youtube.com/embed/${router.query.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>

        <h1>{router.query.title}</h1>
      </StyledVideo>
    </>
  )
}

export default Video