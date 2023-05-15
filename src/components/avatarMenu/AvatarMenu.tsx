import {
  DropdownMenu,
  AvatarRootStyled,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuTrigger
} from ".";
import { SignOut, UserCircle, Sun, Moon } from "phosphor-react";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../services/videoService";
import { DropdownMenuItem, AvatarImageStyled } from "./index";
import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";
import { SetStateAction, useState } from "react";
import { RegisterVideo } from "../modalRegisterVideo/registerVideo";
import { AnimatePresence } from "framer-motion";
import { Video } from "@phosphor-icons/react";

export const AvatarMenu = () => {
  const { user, setUser } = useAuth()
  const [isRegister, setIsRegister] = useState(false)
  const { color, handleColor } = useTheme()

  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>

          <AvatarRootStyled>
            <AvatarImageStyled
              className="AvatarImage"
              src={user?.user_metadata?.profilePic}
              alt={`imagem de perfil do ${user?.user_metadata?.name}`}
            />
          </AvatarRootStyled>

        </DropdownMenuTrigger>
        <DropdownMenuPortal>

          <DropdownMenuContent sideOffset={5}>

            <DropdownMenuItem onSelect={() => handleColor(color === "dark" ? "light" : "dark")}>
              Mudar tema
              {color === "dark" ? <Sun size={25} weight="bold" /> : <Moon size={25} weight="bold" />}
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href="/profile">Meu perfil</Link>
              <UserCircle size={25} weight="bold" />
            </DropdownMenuItem>

            <DropdownMenuItem onSelect={() => setIsRegister(prev => !prev)}>
              Adicionar video
              <Video size={25} weight="bold" />
            </DropdownMenuItem>

            <DropdownMenuItem onSelect={signOut}>
              Sair <SignOut size={25} weight="bold" />
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu >

      <AnimatePresence>
        {isRegister && <RegisterVideo setIsRegister={setIsRegister} />}
      </AnimatePresence>
    </>
  )
}