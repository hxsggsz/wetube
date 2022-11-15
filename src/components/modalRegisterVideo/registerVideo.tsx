import { X, YoutubeLogo } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { StyledRegisterVideo } from ".";
import videoService from "../../services/videoService";
import { CloseIcon } from "../notification";
import { Notify } from "../notification/notification";
import { AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { ValidationsResolvers } from "../../validations/validations";
import { ValidationsInterface } from "../../validations/interfaceValidations";

function useFormulario() {
  const [values, setValues] = useState({ titulo: '', url: '' })
  return {
    values,
    handleChange: (e: FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value
      const name = e.currentTarget.name
      setValues({
        ...values,
        [name]: value
      })
    },
    clearForm() {
      setValues({ titulo: '', url: '' })
    },
    getThumb(url: string) {
      return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
    }
  }
}

export const RegisterVideo: React.FC = () => {
  const form = useFormulario()
  const service = videoService()
  const [notify, setNotify] = useState(false)
  const [visible, setVisible] = useState(false)

  const formMethod = useForm<ValidationsInterface>({
    resolver: ValidationsResolvers,
    defaultValues: {
      titulo: '',
      url: '',
    },
  })
  const { formState: { errors, isSubmitSuccessful }, register, handleSubmit, reset, resetField } = formMethod

  function onSubmit(values) {
    service.setNewVIdeo()
      .insert({
        title: form.values.titulo,
        url: form.values.url,
        thumb: form.getThumb(form.values.url)
      }).then(res => console.log(res))
    setVisible(!visible)

    setNotify(true)
    setTimeout(() => {
      setNotify(false)
    }, 5000);
    reset: (
      {
        titulo: '',
        url: '',
      }
    )
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ titulo: '', url: '' });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <StyledRegisterVideo>
      <button onClick={() => setVisible(!visible)} className='add-video'>+</button>
      {visible && <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <button onClick={() => setVisible(!visible)} className='close-modal'>x</button>
          <input
            {...register('titulo')}
            name='titulo'
            value={form.values.titulo}
            onChange={form.handleChange}
            placeholder="Titulo do video" />
          {errors?.titulo?.message && (
            <span>{errors?.titulo?.message}</span>
          )}
          <input
            {...register('url')}
            name='url'
            value={form.values.url}
            onChange={form.handleChange}
            placeholder="Ensira a URL aqui" />
          {errors?.url?.message && (
            <span>{errors?.url?.message}</span>
          )}
          <button type='submit' >Cadastrar</button>
        </div>
      </form>}
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
              <p>Video cadastrado com sucesso!</p>
            </Notify.Body>
          </Notify.Root>
        )}
      </AnimatePresence>
    </StyledRegisterVideo>
  );
}

