import { Dispatch, SetStateAction, useEffect, useState } from "react"
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
  const [IsLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [UsernameError, setUsernameError] = useState("")

  const { register, handleSubmit, watch } = useForm<UsernameInputs>()

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

  useEffect(() => {
    watch((data) => {
      data.name !== "" && data.username !== "" ? setIsDisabled(false) : setIsDisabled(true)
    })
  }, [watch])

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
      <Button type="submit" disabled={isDisabled} isLoading={IsLoading}
      >Criar Conta</Button>
    </motion.form>
  )
}