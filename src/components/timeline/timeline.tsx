import { StyledCategory, StyledTimeline, StyledTimelineWrapper } from ".";
import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "../../services/videoService";
import { CardTimeline } from '../cards/cardTimeline/cardTimeline';
import { CardTimelineSkeleton } from "../cards/cardTimeline/cardTimelineSkeleton";
import { Skeleton } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

interface Video {
  id: number
  thumb: string
  title: string
  url: string
  user_id: string
  author: string
  created_at: string
  author_image: string
  category: string
}

export const Timeline = () => {
  const { user } = useAuth()
  const ref = useRef<HTMLDivElement | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [timeline, setTimeline] = useState<Video[]>([]);

  const tech = timeline.filter(videos => videos.category === "Técnologia")
  const food = timeline.filter(videos => videos.category === "Culinária")
  const games = timeline.filter(videos => videos.category === "Jogos")
  const animes = timeline.filter(videos => videos.category === "Animes")
  const musics = timeline.filter(videos => videos.category === "Música")

  useEffect(() => {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    }

    async function newTimeline() {
      //configurar o CORS quando cria o client `supabase` não funciona, então para funcionar tive que fazer isso
      fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/video?&apikey=${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`, {
        headers: corsHeaders
      })

      const { data: video } = await supabase.from('video').select('*')

      video && setTimeline(video)
      setIsLoading(false)
    }
    supabase
      .from('video')
      .on('INSERT', (payload) => newTimeline()) //atualiza os videos na timeline
      .subscribe()
    newTimeline() // mostra a timeline

  }, [])

  return (
    <>
      <StyledTimelineWrapper ref={ref}>
        <StyledCategory whileHover={{ cursor: "grab" }}
            whileDrag={{ cursor: "grabbing " }}>
          {isLoading ? <Skeleton variant="text" width="30%" height="20%" /> : <h1 className="first">Saiba tudo sobre <span>Técnologia</span></h1>}
          <StyledTimeline
            drag="x"
            dragElastic={0.2}
            dragConstraints={ref}
          >
            {isLoading ? <>
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
            </> : (tech.map(videos => (
              <CardTimeline
                key={videos.id}
                id={videos.id}
                url={videos.url}
                userId={videos.user_id}
                thumb={videos.thumb}
                category={videos.category}
                title={videos.title}
                author={videos.author}
                createdAt={videos.created_at}
                author_image={videos.author_image}
              />
            )))}
          </StyledTimeline>
        </StyledCategory>
      </StyledTimelineWrapper>

      <StyledTimelineWrapper ref={ref}>
        <StyledCategory>
          {isLoading ? <Skeleton variant="text" width="30%" height="20%" /> : <h1>As <span>Comidas</span> mais deliciosas</h1>}
          <StyledTimeline drag="x" dragElastic={0.2} dragConstraints={ref}>
            {isLoading ? <>
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
            </> : (food.map(videos => (
              <CardTimeline
                key={videos.id}
                id={videos.id}
                url={videos.url}
                userId={videos.user_id}
                thumb={videos.thumb}
                category={videos.category}
                title={videos.title}
                author={videos.author}
                createdAt={videos.created_at}
                author_image={videos.author_image}
              />
            )))}
          </StyledTimeline>
        </StyledCategory>
      </StyledTimelineWrapper>

      <StyledTimelineWrapper ref={ref}>
        <StyledCategory>
          {isLoading ? <Skeleton variant="text" width="30%" height="20%" /> : <h1>Os melhores <span>jogos</span></h1>}
          <StyledTimeline drag="x" dragElastic={0.2} dragConstraints={ref}>
            {isLoading ? <>
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
            </> : (games.map(videos => (
              <CardTimeline
                key={videos.id}
                id={videos.id}
                url={videos.url}
                userId={videos.user_id}
                thumb={videos.thumb}
                category={videos.category}
                title={videos.title}
                author={videos.author}
                createdAt={videos.created_at}
                author_image={videos.author_image}
              />
            )))}
          </StyledTimeline>
        </StyledCategory>
      </StyledTimelineWrapper>

      <StyledTimelineWrapper ref={ref}>
        <StyledCategory>
          {isLoading ? <Skeleton variant="text" width="30%" height="20%" /> : <h1>Os <span>Animes</span> do ano</h1>}
          <StyledTimeline drag="x" dragElastic={0.2} dragConstraints={ref}>
            {isLoading ? <>
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
            </> : (animes.map(videos => (
              <CardTimeline
                key={videos.id}
                id={videos.id}
                url={videos.url}
                userId={videos.user_id}
                thumb={videos.thumb}
                category={videos.category}
                title={videos.title}
                author={videos.author}
                createdAt={videos.created_at}
                author_image={videos.author_image}
              />
            )))}
          </StyledTimeline>
        </StyledCategory>
      </StyledTimelineWrapper>

      <StyledTimelineWrapper ref={ref}>
        <StyledCategory>
          {isLoading ? <Skeleton variant="text" width="30%" height="20%" /> : <h1>As <span>músicas</span> do momento</h1>}
          <StyledTimeline drag="x" dragElastic={0.2} dragConstraints={ref}>
            {isLoading ? <>
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
              <CardTimelineSkeleton />
            </> : (musics.map(videos => (
              <CardTimeline
                key={videos.id}
                id={videos.id}
                url={videos.url}
                userId={videos.user_id}
                thumb={videos.thumb}
                category={videos.category}
                title={videos.title}
                author={videos.author}
                createdAt={videos.created_at}
                author_image={videos.author_image}
              />
            )))}
          </StyledTimeline>
        </StyledCategory>
      </StyledTimelineWrapper>
    </>
  )
}