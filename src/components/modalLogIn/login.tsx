import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { supabase } from "../../services/videoService"
import { Modal } from '../modal/modal';
import { Input } from '../input/input';
import { Button } from '../button/button';
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from '../../context/AuthContext';
import * as style from ".";
import { LockOpen } from "phosphor-react";
import { RecoverPassword } from './recoverPassword';
import { Error } from "../error/error";
import { AnimatePresence } from "framer-motion";

interface LoginInputs {
  email: string
  password: string
}

export const ModalLogin = ({ setLogin }: { setLogin: Dispatch<SetStateAction<boolean>> }) => {
  const { setUser } = useAuth()
  const [isDisabled, setIsDisabled] = useState(true)
  const [resetPass, setResetPass] = useState(false)
  const [LoginError, setLoginError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [handlePassword, setHandlePassword] = useState("password")

  const { register, handleSubmit, watch } = useForm<LoginInputs>()

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    setIsLoading(true)
    const { user, error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password
    })
    setLogin(prev => !prev)
    setUser(user)

    if (error) {
      setLogin(true)
      setLoginError(error.message)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    watch((data) => {
      data.email !== "" && data.password !== "" ? setIsDisabled(false) : setIsDisabled(true)
    })
  }, [watch])

  return (
    <Modal.Root>
      <Modal.Container>
        <Modal.Close onClose={() => setLogin(prev => !prev)} />

        <Modal.Content>
          <AnimatePresence>

            {!resetPass ? (
              <style.Wrapper
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
              >
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

                  <style.resetPassword onClick={() => setResetPass(prev => !prev)}>
                    <LockOpen size={24} weight="bold" />
                    <p>Não lembra sua senha?</p>
                  </style.resetPassword>

                  <Button disabled={isDisabled} type="submit" isLoading={isLoading}>Log In</Button>
                </style.form>
                <Error>{LoginError}</Error>
              </style.Wrapper>
            ) : <RecoverPassword setResetPass={setResetPass} />}
          </AnimatePresence>
        </Modal.Content>

      </Modal.Container>
    </Modal.Root>
  )
}