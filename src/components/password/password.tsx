import * as style from "."
import { Button } from "../button/button";
import { Input } from '../input/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { supabase } from '../../services/videoService';
import { useState } from "react";
import { Error } from "../error/error";
import { Menu } from "../menu/menu";

interface NewPasswordInputs {
  Password: string
  SamePassword: string
}

export const ResetPassword = () => {
  const [passError, setPassError] = useState("")
  const [loading, setLoading] = useState(false)
  const [handlePassword, setHandlePassword] = useState("password")
  const { register, handleSubmit } = useForm<NewPasswordInputs>()

  const onSubmit: SubmitHandler<NewPasswordInputs> = async (data) => {
    setLoading(true)
    if (data.Password !== data.SamePassword) {
      setPassError("As senhas precisam ser idênticas")
    }

    const { error } = await supabase.auth.update({ password: data.Password })
    if (error) {
      setPassError(error.message)
    }

    setLoading(false)
  }

  return (
    <style.Wrapper>
      <Menu />
      <style.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          isPassword
          type={handlePassword}
          placeholder="Sua senha"
          {...register('Password')}
          HandlePassword={handlePassword}
          setHandlePassword={setHandlePassword}
        />
        <Input
          isPassword
          type={handlePassword}
          placeholder="repita a senha"
          {...register('SamePassword')}
          HandlePassword={handlePassword}
          setHandlePassword={setHandlePassword}
        />
        <Error>{passError}</Error>

        <Button isLoading={loading}>Nova Senha</Button>
      </style.Form>
    </style.Wrapper>
  )
}