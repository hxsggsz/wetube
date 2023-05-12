import { Dispatch, SetStateAction, useState } from "react"
import { supabase } from "../../services/videoService"
import { Modal } from "../modal/modal";
import { Input } from "../input/input";
import { Button } from "../button/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Error } from "../error/error";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";

interface UsernameInputs {
  name: string
  username: string
}

export const UserName = ({ setSteps }: { setSteps: Dispatch<SetStateAction<number>> }) => {
  const { setUser } = useAuth()
  const [UsernameError, setUsernameError] = useState("")
  const [IsLoading, setIsLoading] = useState(false)

  const { register, handleSubmit } = useForm<UsernameInputs>()


  const onSubmit: SubmitHandler<UsernameInputs> = async (data) => {
    setIsLoading(true)

    const { user, error } = await supabase.auth.update({
      data: {
        name: data.name,
        username: data.username
      }
    })

    if (error) {
      setUsernameError(error.message)
      return
    }

    setIsLoading(false)
    setUser(user)
    setSteps(prev => prev + 1)
  }

  return (
    <motion.form
      style={{ width: "100%" }}
      onSubmit={handleSubmit(onSubmit)}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
    >
      <Input {...register("name")} placeholder="Nome" />
      <Input {...register("username")} placeholder="Username" />
      <Error>{UsernameError}</Error>
      <Button type="submit" isLoading={IsLoading}
      >Criar Conta</Button>
    </motion.form>
  )
}