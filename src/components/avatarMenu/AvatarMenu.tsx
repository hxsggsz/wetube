import {
  AvatarRootStyled,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger
} from ".";
import { SignOut, User } from "phosphor-react";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../services/videoService";
import { DropdownMenuItem, AvatarImageStyled } from "./index";
import Link from "next/link";

export const AvatarMenu = () => {
  const { user, setUser } = useAuth()

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
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

            <DropdownMenuItem>
              <Link href="/profile">Meu perfil</Link>
              <User size={18} weight="bold" />
            </DropdownMenuItem>

            <DropdownMenuItem onClick={signOut}>
              Sair <SignOut size={18} weight="bold" />
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu >
    </>
  )
}