import { X, YoutubeLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import { StyledRegisterVideo, Form } from ".";
import videoService from "../../services/videoService";
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

export const RegisterVideo: React.FC = () => {
  const service = videoService()
  const [notify, setNotify] = useState(false)
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const formMethod = useForm<ValidationsInterface>({
    resolver: ValidationsResolvers,
    defaultValues: {
      titulo: '',
      url: '',
    },
  })
  const { formState: { errors, isSubmitSuccessful }, register, handleSubmit, reset } = formMethod

  const getThumb = (url: string) => {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
  }

  const onSubmit: SubmitHandler<ValidationsInterface> = async (data) => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 2000))

    await service.setNewVIdeo()
      .insert({
        title: data.titulo,
        url: data.url,
        thumb: getThumb(data.url)
      })

    setLoading(false)
    setVisible(!visible)

    setNotify(true)
    setTimeout(() => {
      setNotify(false)
    }, 4300)
  }

  useEffect(() => {
    reset({ titulo: '', url: '' });
  }, [isSubmitSuccessful]);

  return (
    <StyledRegisterVideo>
      <button onClick={() => setVisible(!visible)} className='add-video'>+</button>
      <AnimatePresence>
        {visible && (
          <Modal.Root>
            <Modal.Container>
              <Modal.Close onClose={() => setVisible(!visible)} />

              <Modal.Content>

                <Form onSubmit={handleSubmit(onSubmit)}>
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

                  <Button type='submit' isLoading={loading}>'Submit'</Button>
                </Form>
              </Modal.Content>
            </Modal.Container>
          </Modal.Root>
        )}
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
    </StyledRegisterVideo >
  );
}

