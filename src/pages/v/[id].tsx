import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { StyledInfo, StyledVideo } from '../../components/iframe'
import { Iframe } from '../../components/iframe/iframe'
import { supabase } from '../../services/videoService'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Skeleton } from '@mui/material'
import { Button } from '../../components/button/button'
import { Star } from '@phosphor-icons/react'

interface Video {
  id: number
  thumb: string
  title: string
  url: string
  author: string
  author_image: string
  category: string
}

export default function Video() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [video, setVideo] = useState<Video>()
  const videoIdMatch = video?.url.match(/(?<=v=).+/)

  useEffect(() => {
    async function getVideo() {
      if (router.query.id) {
        const { data } = await supabase.from('video').select('*').eq('id', router.query.id.toString())
        console.log(data)

        if (data) {
          data.map((video: Video) => setVideo(video))
          setIsLoading(false)
        }
      }

    }
    getVideo()
  }, [])

  return (
    <>
      <StyledVideo>
        <Iframe src={`https://www.youtube.com/embed/${videoIdMatch}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

        <h1>{video?.title}</h1>

        <StyledInfo>
          <Image src={video?.author_image!} className='authorImg' width={50} height={50} alt={`imagem de perfil do ${video?.author}`} />
          <p>{video?.author}</p>
        </StyledInfo>
      </StyledVideo>
    </>
  )
}