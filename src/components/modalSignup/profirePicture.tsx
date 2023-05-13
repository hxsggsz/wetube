import { Dispatch, SetStateAction, useState } from "react"
import { supabase } from "../../services/videoService"
import { Error } from "../error/error";
import { useAuth } from "../../context/AuthContext";
import uuid from "react-uuid"
import { Img, InputFile, Label, Wrapper } from ".";

export const ProfilePicture = ({ setSignUp }: { setSignUp: Dispatch<SetStateAction<boolean>> }) => {
  const { user, setUser } = useAuth()
  const [image, setImage] = useState("")
  const [UsernameError, setUsernameError] = useState("")

  const addImage = async (ev: any) => {
    const useId = uuid()
    const files = ev.target.files[0]
    const { data, error } = await supabase
      .storage
      .from("images")
      .upload(user?.id! + "/" + useId, files)

      if(data) {
        const CDNURL = "https://sdrsduyvpgydxlxzswzl.supabase.co/storage/v1/object/public/"
        setImage(CDNURL + data.Key)
        
        const { user, error } = await supabase.auth.update({
          data: {
            profilePic: CDNURL + data.Key
          }
        })
        setUser(user)
      }

    if (error) {
      setUsernameError(error.message)
      return
    }

    setTimeout(() => {
      setSignUp(prev => !prev)
    }, 4000)
  }

  return (
    <Wrapper
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
    >
      {image && <Img src={image} width={170} height={170} alt="sua foto de usuário" />}
      <h3>Por fim, escolha uma foto de perfil</h3>
      <Label htmlFor="arquivo">Foto de perfil</Label>
      <InputFile type="file" id="arquivo" onChange={ev => addImage(ev)} />
      <Error>{UsernameError}</Error>
    </Wrapper>
  )
}