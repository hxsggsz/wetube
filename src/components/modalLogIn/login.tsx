import { Dispatch, SetStateAction, useState } from "react"
import { supabase } from "../../services/videoService"
import { Modal } from '../modal/modal';
import { Input } from '../input/input';
import { Button } from '../button/button';
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from '../../context/AuthContext';
import type { ApiError } from "@supabase/supabase-js";
import * as style from ".";

interface LoginInputs {
  email: string
  password: string
}

export const ModalLogin = ({ setLogin }: { setLogin: Dispatch<SetStateAction<boolean>> }) => {
  const { setUser } = useAuth()
  const [LoginError, setLoginError] = useState<ApiError | null>()
  const [handlePassword, setHandlePassword] = useState("password")

  const { register, handleSubmit } = useForm<LoginInputs>()

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const { user, error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password
    })
    setLogin(prev => !prev)
    setUser(user)
    
    if (error) {
      setLogin(true)
      setLoginError(error)
    }
  }

  return (
    <Modal.Root>
      <Modal.Container>
        <Modal.Close onClose={() => setLogin(prev => !prev)} />

        <Modal.Content>
          <style.form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              placeholder="email"
              {...register('email')}
            />
            <Input
              isPassword 
              placeholder="senha"
              type={handlePassword}
              {...register('password')}
              HandlePassword={handlePassword}
              setHandlePassword={setHandlePassword}
            />
            <Button type="submit">Log In</Button>
          </style.form>
          <style.error>{LoginError?.message}</style.error>
        </Modal.Content>

      </Modal.Container>
    </Modal.Root>
  )
}