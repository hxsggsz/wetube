import Image from 'next/image'
import * as style from "."
import Link from 'next/link'

interface CardVideoProps {
  vid: videos[]
}

interface videos {
  id: number
  url: string
  thumb: string
  title: string
  author: string
  category: string
  author_image: string
}

export const CardVideo = ({ vid }: CardVideoProps) => {
  return (
    <>
      {vid.map(video => (
        <Link href={{ pathname: `/v/${video.url.match("(?<=v=).+")}`, query: { category: video.category, i: video.id } }}>
          <style.CardWrapper key={video.id}>
            <Image
              width={220}
              height={120}
              className='thumb'
              src={video.thumb}
              alt={`thumbnail do video ${video.title}`}
            />
            <div>
              <h4>{video.title}</h4>
              <style.CardInfo>
                <Image
                  width={40}
                  height={40}
                  quality={100}
                  src={video.author_image}
                  alt={`icone do ${video.author}`}
                />
                <p>{video.author}</p>
              </style.CardInfo>
            </div>
          </style.CardWrapper>
        </Link>
      ))}
    </>
  )
}
