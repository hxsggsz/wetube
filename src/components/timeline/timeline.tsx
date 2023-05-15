import { StyledCategory, StyledTimeline, StyledTimelineWrapper } from ".";
import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "../../services/videoService";
import { CardTimeline } from '../cards/cardTimeline/cardTimeline';
import { CardTimelineSkeleton } from "../cards/cardTimeline/cardTimelineSkeleton";

interface Video {
  id: number
  thumb: string
  title: string
  url: string
  author: string
  author_image: string
  category: string
}

export const Timeline = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [timeline, setTimeline] = useState<Video[]>([]);

  const tech = timeline.filter(videos => videos.category === "Técnologia")
  const food = timeline.filter(videos => videos.category === "Culinária")
  const games = timeline.filter(videos => videos.category === "Jogos")
  const animes = timeline.filter(videos => videos.category === "Animes")
  const musics = timeline.filter(videos => videos.category === "Música")

  useEffect(() => {
    async function newTimeline() {
      const { data: video } = await supabase.from('video').select('*')
      video && setTimeline(video)
    }
    supabase
      .from('video')
      .on('INSERT', (payload) => newTimeline()) //atualiza os videos na timeline
      .subscribe()
    newTimeline() // mostra a timeline

    setIsLoading(false)
  }, [])

  return (
    <StyledTimelineWrapper ref={ref}>
      <StyledCategory>
        <h1>Os melhores jogos:</h1>
        <StyledTimeline drag="x" dragElastic={0.2} dragConstraints={ref}>
          {isLoading ? <><CardTimelineSkeleton /><CardTimelineSkeleton /><CardTimelineSkeleton /><CardTimelineSkeleton /></> : (games.map(videos => (
            <CardTimeline
              key={videos.id}
              url={videos.url}
              thumb={videos.thumb}
              title={videos.title}
              isLoading={isLoading}
              author={videos.author}
              author_image={videos.author_image}
            />
          )))}
        </StyledTimeline>
      </StyledCategory>
    </StyledTimelineWrapper >
  )
}