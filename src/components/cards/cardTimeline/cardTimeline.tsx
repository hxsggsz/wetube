import * as style from ".";
import Image from "next/image"
import { DotsThreeVertical, Trash, YoutubeLogo } from "@phosphor-icons/react"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "../../avatarMenu";
import { useAuth } from "../../../context/AuthContext";

interface CardProps {
  id: number
  thumb: string
  title: string
  url: string
  category: string
  author: string
  userId: string
  createdAt: string
  author_image: string
}

export const CardTimeline = (props: CardProps) => {
  const { user } = useAuth()
  const [date, setDate] = useState("")

  const currentDate = new Date()
  const created = new Date(props.createdAt)

  const result = currentDate.getTime() - created.getTime()

  useEffect(() => {
    const days = Math.floor(result / (1000 * 60 * 60 * 24))
    const minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60))
    const hours = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    if (days > 0) {
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
    <style.Wrapper whileHover={{ scale: 1.02 }}>
      <motion.img
        width={350}
        height={195}
        className="thumb"
        src={props.thumb}
        alt={`card do video ${props.title}`}
      />
      <style.Author>

        <style.WrapperInfo>
          <Image className="img-author" src={props.author_image} width={50} height={50} alt={`icone do ${props.author}`} />
          <style.TextInfo>
            <h3>{props.title}</h3>

            <style.TextAuthor>
              <style.WrapperInfo>
                <p>{props.author}</p>
                <YoutubeLogo size="15" weight="bold" />
                <p>{date}</p>
              </style.WrapperInfo>

            </style.TextAuthor>
            <Link className="link" href={{ pathname: `/v/${props.url.match("(?<=v=).+")}`, query: { category: props.category, i: props.id } }}>Assista</Link>
          </style.TextInfo>
        </style.WrapperInfo>

      </style.Author>
    </style.Wrapper>
  )
}
