import { X, YoutubeLogo } from "phosphor-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import videoService, { supabase } from "../../services/videoService";
import { CloseIcon } from "../notification";
import { Notify } from "../notification/notification";
import { AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { ValidationsResolvers } from "../../validations/validations";
import { ValidationsInterface } from "../../validations/interfaceValidations";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Modal } from "../modal/modal";
import { Input } from '../input/input';
import { Button } from '../button/button';
import { Error } from "../error/error";
import { SelectCategories } from "../select/select";
import { useAuth } from "../../context/AuthContext";
import { Form } from ".";

export const RegisterVideo = ({ setIsRegister }: { setIsRegister: Dispatch<SetStateAction<boolean>> }) => {
  const service = videoService()
  const { user: oldUser, setUser } = useAuth()
  const [error, setError] = useState("")
  const [select, setSelect] = useState("")
  const [notify, setNotify] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const formMethod = useForm<ValidationsInterface>({ resolver: ValidationsResolvers })

  const { formState: { errors, isSubmitSuccessful }, register, watch, handleSubmit, reset } = formMethod

  const getThumb = (url: string) => {
    // pega tudo entre o "v=... e ignora se tiver outro parametro na url depois"
    const videoIdMatch = url.match(/(?:youtu\.be\/|v=|u\/\w\/|embed\/|v\/|youtube\.com\/user\/\w+\/|ytscreeningroom\?v=|youtube\.com\/v\/)([^#?&]+)/)

    if (videoIdMatch) {
      const videoId = videoIdMatch[1];
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }

    return "/imgDefault.png"
  }

  const onSubmit: SubmitHandler<ValidationsInterface> = async (data) => {
    setLoading(true)

    const { error, data: postedVideo } = await service.setNewVIdeo()
      .insert({
        category: select,
        userId: oldUser?.id,
        author: oldUser?.user_metadata.username,
        author_image: oldUser?.user_metadata.profilePic,
        title: data.titulo,
        url: data.url,
        thumb: getThumb(data.url)
      })

    error && setError(error.message)
    setLoading(false)
    setIsRegister(prev => !prev)

    setNotify(true)
    setTimeout(() => {
      setNotify(false)
    }, 4300)
  }

  useEffect(() => {
    watch((data) => {
      data.titulo !== "" && data.url !== "" && select !== "" ? setIsDisabled(false) : setIsDisabled(true)
    })
  }, [watch, select])

  useEffect(() => {
    reset({ titulo: '', url: '' });
  }, [isSubmitSuccessful])

  return (
    <>
      <AnimatePresence>
        <Modal.Root>
          <Modal.Container>
            <Modal.Close onClose={() => setIsRegister(prev => !prev)} />

            <Modal.Content>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <SelectCategories setSelect={setSelect} />
                <Input
                  {...register('titulo')}
                  placeholder="Titulo do video" />
                {errors?.titulo?.message && (
                  <Error>{errors?.titulo?.message}</Error>
                )}
                <Input
                  {...register('url')}
                  placeholder="Ensira a URL aqui" />

                {errors?.url?.message && <Error>{errors?.url?.message}</Error>}
                <Error>{error}</Error>
                <Button type='submit' disabled={isDisabled} isLoading={loading}>Submit</Button>
              </Form>
            </Modal.Content>
          </Modal.Container>
        </Modal.Root>
      </AnimatePresence>


      <AnimatePresence>
        {notify && (
          <Notify.Root>
            <Notify.Title>
              <Notify.Icon>
                <YoutubeLogo size={32} />
              </Notify.Icon>
              <h1>ALURATUBE</h1>
            </Notify.Title>

            <Notify.Icon>
              <CloseIcon onClick={() => setNotify(!notify)}>
                <X size={20} />
              </CloseIcon>
            </Notify.Icon>
            <Notify.Body>

              <Notify.Timer />
              <div>
                <p>Video cadastrado com sucesso!</p>
              </div>
            </Notify.Body>
          </Notify.Root>
        )}
      </AnimatePresence>
    </>
  )
}

