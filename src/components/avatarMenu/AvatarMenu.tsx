import { 
  AvatarRootStyled, 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuPortal, 
  DropdownMenuTrigger
 } from ".";
import { SignOut } from "phosphor-react";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../services/videoService";
import { DropdownMenuItem, AvatarImageStyled } from "./index";

export const AvatarMenu = () => {
  const { image, user, setUser } = useAuth()

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
              src={image}
              alt={`imagem de perfil do ${user?.user_metadata?.name}`}
            />
          </AvatarRootStyled>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>

          <DropdownMenuContent sideOffset={5}>

            <DropdownMenuItem onClick={signOut}>
              Sair <SignOut size={18} weight="bold" />
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu >
    </>
  )
}