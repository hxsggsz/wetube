import * as style from ".";
import Image from "next/image"
import { YoutubeLogo } from "@phosphor-icons/react"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../../button/button";

interface CardProps {
  id: number
  thumb: string
  title: string
  url: string
  author: string
  createdAt: string
  author_image: string
}

export const CardTimeline = (props: CardProps) => {
  const [isHover, setIsHover] = useState(false)
  const [date, setDate] = useState("")
  const created = new Date(props.createdAt)
  const currentDate = new Date()

  const result = currentDate.getTime() - created.getTime()


  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth

      width <= 768 && setIsHover(true)
    }

    const days = Math.floor(result / (1000 * 60 * 60 * 24));
    const hours = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));

    // const minutes = result / 1000 / 60
    // const hours = result / 1000 / 60 / 60
    // const days = result / 1000 / 60 / 60 / 24
    //            ms       s     m    h    d

    if (days > 0 && hours > 0) {
      setDate(Math.floor(days) + ' dias atrás')
      return
    }

    if (hours > 0) {
      setDate(Math.floor(hours) + ' horas atrás')
      return
    }

    if (minutes > 0) {
      setDate(Math.floor(minutes) + ' minutos atrás')
      return
    }
  }, [])

  return (
    <style.Wrapper onHoverStart={() => setIsHover(prev => !prev)} onHoverEnd={() => setIsHover(prev => !prev)} whileHover={{ scale: 1.02 }}>
      <motion.img
        width={350}
        height={195}
        className="thumb"
        src={props.thumb}
        alt={`card do video ${props.title}`}
      />
      <style.Author>

        <style.WrapperInfo>
          <Image className="img-author" src={props.author_image} width={40} height={40} alt={`icone do ${props.author}`} />
          <style.TextInfo>
            <h3>{props.title}</h3>

            <style.TextAuthor>
              <p>{props.author}</p>
              <YoutubeLogo size="15" weight="bold" />
              <p>{date}</p>
            </style.TextAuthor>
            {isHover && <Link className="link" href={`/v/${props.id}`}>Assista</Link>}
          </style.TextInfo>
        </style.WrapperInfo>

      </style.Author>
    </style.Wrapper>
  )
}
