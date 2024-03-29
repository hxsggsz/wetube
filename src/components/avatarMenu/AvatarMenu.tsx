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
import { useState } from "react";
import { RegisterVideo } from "../modalRegisterVideo/registerVideo";
import { AnimatePresence } from "framer-motion";
import { CaretDown, CaretUp, Video } from "@phosphor-icons/react";

export const AvatarMenu = () => {
  const { user, setUser } = useAuth()
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false)
  const { color, handleColor } = useTheme()

  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <>
      <DropdownMenu onOpenChange={setIsOpen}>
        <DropdownMenuTrigger data-cy="open-menu" asChild>

          <AvatarRootStyled>
            <AvatarImageStyled
              className="AvatarImage"
              src={user?.user_metadata?.profilePic}
              alt={`imagem de perfil do ${user?.user_metadata?.name}`}
            />
            {isOpen ? <CaretUp size={20} color="grey" weight="bold" /> : <CaretDown size={20} color="grey" weight="bold" />}
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

            <DropdownMenuItem data-cy="add-video" onSelect={() => setIsRegister(prev => !prev)}>
              Adicionar video
              <Video size={25} weight="bold" />
            </DropdownMenuItem>

            <DropdownMenuItem onSelect={signOut}>
              Sair <SignOut size={25} weight="bold" />
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>

      <AnimatePresence>
        {isRegister && <RegisterVideo setIsRegister={setIsRegister} />}
      </AnimatePresence>
    </>
  )
}