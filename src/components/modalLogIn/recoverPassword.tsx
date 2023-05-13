import { Lock, YoutubeLogo } from 'phosphor-react';
import * as style from ".";
import { Button } from "../button/button";
import { Input } from '../input/input';
import { SubmitHandler, useForm } from "react-hook-form";
import { supabase } from '../../services/videoService';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Error } from "../error/error";
import { AnimatePresence } from "framer-motion";

interface RecoverPasswordInputs {
  RecoverPassword: string
}

export const RecoverPassword = ({ setResetPass }: { setResetPass: Dispatch<SetStateAction<boolean>> }) => {
  const [recError, setRecError] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isSucess, setIsSucess] = useState(false)
  const { formState: { isSubmitSuccessful }, reset, watch, register, handleSubmit } = useForm<RecoverPasswordInputs>()


  const onSubmit: SubmitHandler<RecoverPasswordInputs> = async (data) => {
    setIsLoading(true)
    const { error } = await supabase.auth.api.resetPasswordForEmail(data.RecoverPassword, {
      redirectTo: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://aluratube-hxsggsz.vercel.app",
    })

    if (error) {
      setRecError(error.message)
      setIsSucess(false)
    }

    setIsLoading(false)
    setIsSucess(true)
  }

  useEffect(() => {
    watch((data) => {
      data.RecoverPassword !== "" ? setIsDisabled(false) : setIsDisabled(true)
    })
  }, [watch])

  useEffect(() => {
    reset({ RecoverPassword: '' });
  }, [isSubmitSuccessful])

  return (
    <AnimatePresence>
      <style.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
      >
        <Input
          type="email"
          placeholder="Email"
          {...register('RecoverPassword')}
        />
        <Error>{recError}</Error>

        <style.resetPassword onClick={() => setResetPass(prev => !prev)}>
          <Lock size={24} weight="bold" />
          <p>Lembrou sua senha?</p>
        </style.resetPassword>

        <Button type="submit" disabled={isDisabled} isLoading={isLoading}>Enviar Email</Button>
      </style.form>

      {isSucess && <p style={{ marginTop: "50px" }}>Verifique o seu E-mail para resetar sua senha!</p>}
    </AnimatePresence>
  )
}