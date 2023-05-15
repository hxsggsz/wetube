import * as style from ".";
import Image from "next/image"
import { YoutubeLogo } from "@phosphor-icons/react"
import { useState } from "react";
import { CardTimelineSkeleton } from './cardTimelineSkeleton';
import { motion } from "framer-motion";

interface CardProps {
  isLoading: boolean
  thumb: string
  title: string
  url: string
  author: string
  author_image: string
}

export const CardTimeline = (props: CardProps) => {
  return (
    <>
      {props.isLoading ? <CardTimelineSkeleton /> : (

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
              <Image className="img-author" src={props.author_image} width={40} height={40} alt={`icone do ${props.author}`} />
              <style.TextInfo>
                <h3>{props.title}</h3>

                <style.TextAuthor>
                  <p>{props.author}</p>
                  <YoutubeLogo size="15" weight="bold" />
                  <p>2 dias atras</p>
                </style.TextAuthor>

              </style.TextInfo>
            </style.WrapperInfo>

          </style.Author>
        </style.Wrapper>
      )}
    </>
  )
}
