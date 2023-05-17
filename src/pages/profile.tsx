import { useRouter } from 'next/router';
import { ProfileAvatar } from '../components/profileAvatar/profileAvatar';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { CardVideo } from '../components/cards/cardVideo/cardVideo';
import { supabase } from '../services/videoService';
import * as style from "../../styles/profile"
import { EmptyVideos } from '../components/emptyVideos/emptyVideos';

interface MyVideoProps {
  id: number
  thumb: string
  title: string
  url: string
  author: string
  author_image: string
  category: string
}

export default function Profile() {
  const { user } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [myVideos, setMyVideos] = useState<MyVideoProps[]>([])

  useEffect(() => {
    // !user ? router.replace('/') : setIsLoading(false)
    console.log(user)
  }, [user])

  useEffect(() => {
    getMyVideos()
  }, [])

  async function getMyVideos() {
    if (user) {
      const { data } = await supabase.from("video").select("*").eq("user_id", user.id)

      if (data) {
        setIsLoading(false)
        setMyVideos(data)
      }
    }

  }

  return (
    <>
      <ProfileAvatar />
      <style.Wrapper>
        <h1>Meus videos</h1>
        <style.Video>
          {myVideos.length === 0 ? <EmptyVideos /> : <CardVideo isBigger vid={myVideos} />}
        </style.Video>
      </style.Wrapper>
    </>
  )
}