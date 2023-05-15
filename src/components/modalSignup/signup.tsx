import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { supabase } from "../../services/videoService"
import { Modal } from "../modal/modal";
import { Input } from "../input/input";
import { Button } from "../button/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Error } from "../error/error";
import { useAuth } from "../../context/AuthContext";
import { UserName } from "./username";
import { ProfilePicture } from "./profirePicture";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { handleShowSignUp } from "../../redux/authModal";

interface SignUpInputs {
  email: string
  password: string
  samePassword: string
}

export const ModalSignUp = () => {
  const { setUser } = useAuth()
  const [steps, setSteps] = useState(0)
  const [SignError, setSignError] = useState("")
  const [IsLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [handlePassword, setHandlePassword] = useState("password")
  const dispatch = useDispatch()

  const { register, handleSubmit, watch } = useForm<SignUpInputs>()

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    setIsLoading(true)
    if (data.password !== data.samePassword) {
      setSignError("As senhas precisam ser idênticas!")
    }

    const { user, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    })

    if (error) {
      setSignError(error.message)
    }

    setIsLoading(false)
    setUser(user)
    setSteps(prev => prev + 1)
  }

  useEffect(() => {
    watch((data) => {
      data.email !== "" && data.password !== "" && data.samePassword !== "" ? setIsDisabled(false) : setIsDisabled(true)
    })
  }, [watch])
//ver os botoes tortos e pra fora do layout
  return (
    <Modal.Root>
      <Modal.Container>
        <Modal.Close onClose={() => dispatch(handleShowSignUp())} />

        <Modal.Content>
          <AnimatePresence>
            {steps === 0 && (
              <motion.form
                style={{ width: "100%", overflow: "hidden" }}
                onSubmit={handleSubmit(onSubmit)}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
              >
                <Input
                  type="text"
                  placeholder="Email"
                  {...register("email")}
                />

                <Input
                  isPassword
                  type={handlePassword}
                  placeholder="Senha"
                  {...register("password")}
                  HandlePassword={handlePassword}
                  setHandlePassword={setHandlePassword}
                />
                <Input
                  isPassword
                  type={handlePassword}
                  placeholder="Repita a senha"
                  {...register("samePassword")}
                  HandlePassword={handlePassword}
                  setHandlePassword={setHandlePassword}
                />
                <Error>{SignError}</Error>
                <Button type="submit" disabled={isDisabled} isLoading={IsLoading}
                >Criar Conta</Button>
              </motion.form>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {steps === 1 && <UserName setSteps={setSteps} />}
            {steps === 2 && <ProfilePicture />}
          </AnimatePresence>
        </Modal.Content>

      </Modal.Container>
    </Modal.Root>
  )
}