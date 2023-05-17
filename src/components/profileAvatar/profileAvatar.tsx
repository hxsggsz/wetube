import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent
} from "../avatarMenu"
import { DotsThreeVertical, PaperPlaneRight, Pencil, SealCheck } from "@phosphor-icons/react"
import * as style from '.'
import { useAuth } from '../../context/AuthContext'
import { Skeleton } from "@mui/material"
import { FormEvent, useState } from "react"
import { Input } from "../input/input"
import { Button } from '../button/button';
import { supabase } from "../../services/videoService"
import uuid from "react-uuid"
import { InputFile, Label } from "../modalSignup"

export const ProfileAvatar = ({ isLoading }: { isLoading: boolean }) => {
  const { user, setUser } = useAuth()
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [isHover, setIsHover] = useState(false)
  const [isNameOpen, setIsNameOpen] = useState(false)
  const [isUsernameOpen, setIsUsernameOpen] = useState(false)

  async function handleName(ev: FormEvent) {
    ev.preventDefault()
    if (name !== "") {
      const { user: updatedUser, error } = await supabase.auth.update({
        data: {
          name,
        }
      })
      setUser(updatedUser)
      !error && setIsNameOpen(false)
    }
  }

  async function handleUserName(ev: FormEvent) {
    ev.preventDefault()
    if (name !== "") {
      const { user: updatedUser, error } = await supabase.auth.update({
        data: {
          username,
        }
      })
      setUser(updatedUser)
      !error && setIsUsernameOpen(false)
    }
  }

  async function addImage(ev: any) {
    const useId = uuid()
    const files = ev.target.files[0]

    const { data, error } = await supabase
      .storage
      .from("images")
      .upload(user?.id! + "/" + useId, files)

    if (data) {
      const CDNURL = "https://sdrsduyvpgydxlxzswzl.supabase.co/storage/v1/object/public/"

      const { user, error } = await supabase.auth.update({
        data: {
          profilePic: CDNURL + data.Key,
        }
      })
      !error && setUser(user)
    }
  }

  return (
    <>
      <style.Background>
        <style.UserWrapper>
          {isLoading ? <Skeleton variant="circular" width="150px" height="150px" /> :
            <>
              <style.WrapperImg>
                <style.Img
                  width={100}
                  height={100}
                  src={user?.user_metadata?.profilePic}
                  alt={`avatar do ${user?.user_metadata?.name}`}
                />
                <label htmlFor="arquivo"><Pencil cursor="pointer" size={32} /></label>
                <InputFile type="file" id="arquivo" onChange={ev => addImage(ev)} />
              </style.WrapperImg>

            </>
          }

          <style.Username onHoverStart={() => setIsHover(true)} onHoverEnd={() => setIsHover(false)}>
            <div>
              {isLoading ? <Skeleton width="150px" height="45px" /> : isNameOpen ? (
                <form onSubmit={handleName} style={{ display: "flex", gap: "4px" }}>
                  <Input
                    type="text"
                    value={name}
                    onChange={ev => setName(ev.currentTarget.value)}
                  />
                  <Button disabled={name !== "" ? false : true} type="submit"><PaperPlaneRight size="25" /></Button>
                </form>
              ) : <h1>{user?.user_metadata?.name} <SealCheck size={36} weight="bold" /></h1>}

              {isLoading ? <Skeleton width="100px" height="30px" /> : isUsernameOpen ? (
                <form onSubmit={handleUserName} style={{ display: "flex", gap: "4px" }}>
                  <Input
                    type="text"
                    value={username}
                    onChange={ev => setUsername(ev.currentTarget.value)}
                  />
                  <Button disabled={username !== "" ? false : true} type="submit"><PaperPlaneRight size="25" /></Button>
                </form>
              ) : <span>{`@${user?.user_metadata?.username}`}</span>}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                {isHover && (
                  <DotsThreeVertical cursor="pointer" className="menu" size={32} weight="bold" />
                )}
              </DropdownMenuTrigger>

              <DropdownMenuPortal>

                <DropdownMenuContent sideOffset={5}>

                  <DropdownMenuItem onSelect={() => setIsNameOpen(prev => !prev)}>
                    Mudar Nome
                  </DropdownMenuItem>

                  <DropdownMenuItem onSelect={() => setIsUsernameOpen(prev => !prev)}>
                    Mudar Username
                  </DropdownMenuItem>

                </DropdownMenuContent>
              </DropdownMenuPortal>

            </DropdownMenu>
          </style.Username>

        </style.UserWrapper>
      </style.Background>
    </>
  )
}