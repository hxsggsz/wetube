import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as style from "../../../styles/video"
import { supabase } from '../../services/videoService'
import { Iframe } from '../../components/iframe/iframe'
import { CardVideo } from '../../components/cards/cardVideo/cardVideo';
import { Skeleton } from '@mui/material'
import { CardVideoSkeleton } from '../../components/cards/cardVideo/cardVideoSkeleton';

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
  const [video, setVideo] = useState<Video>()
  const [isLoading, setIsLoading] = useState(true)
  const [sideBarVideo, setsideBarVideo] = useState<Video[]>([])

  useEffect(() => {
    getVideo()
    getSideVideos()
  }, [router.query.id])

  async function getVideo() {
    if (router.query.i) {
      const { data } = await supabase.from('video').select('*').eq('id', router.query.i.toString())

      if (data) {
        data.map((video: Video) => setVideo(video))
      }
    }
  }

  async function getSideVideos() {
    if (router.query.category) {
      const { data } = await supabase.from('video').select('*').eq('category', router.query.category)

      if (data) {
        setsideBarVideo(data)
        setIsLoading(false)
      }
    }
  }

  return (
    <>
      <style.Video>

        <div>
          <Iframe src={`https://www.youtube.com/embed/${router.query.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

          <style.Info>
            {isLoading ? <Skeleton width="420px" height="50px" /> : <h1>{video?.title}</h1>}

            <style.VideoWrapper>
              {isLoading ? <Skeleton variant="circular" width="50px" height="50px" /> : <Image src={video?.author_image!} className='authorImg' width={50} height={50} alt={`imagem de perfil do ${video?.author}`} />}

              {isLoading ? <Skeleton width="120px" height="35px" /> : <style.AuthorName>@{video?.author}</style.AuthorName>}
            </style.VideoWrapper>
          </style.Info>

        </div>
        <style.SideVideos>
          {isLoading ? (
            <>
              <CardVideoSkeleton />
              <CardVideoSkeleton />
              <CardVideoSkeleton />
              <CardVideoSkeleton />
            </>
          ) : <CardVideo vid={sideBarVideo} />}
        </style.SideVideos>
      </style.Video>
    </>
  )
}