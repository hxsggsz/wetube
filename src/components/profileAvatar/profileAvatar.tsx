import { SealCheck } from "@phosphor-icons/react"
import * as style from '.'
import { useAuth } from '../../context/AuthContext'

export const ProfileAvatar = () => {
  const { user } = useAuth()

  return (
    <>
      <style.Background>
        <style.UserWrapper>
          <style.Img
            width={100}
            height={100}
            src={user?.user_metadata?.profilePic}
            alt={`avatar do ${user?.user_metadata?.name}`}
          />
          <style.Username>
            <h1>{user?.user_metadata?.name} <SealCheck size={36} weight="bold" /></h1>
            <span>{`@${user?.user_metadata?.username}`}</span>
          </style.Username>
        </style.UserWrapper>
      </style.Background>
    </>
  )
}