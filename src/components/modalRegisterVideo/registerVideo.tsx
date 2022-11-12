import { X, YoutubeLogo } from "phosphor-react";
import { FormEvent, useState } from "react";
import { StyledRegisterVideo } from ".";
import videoService from "../../services/videoService";
import { CloseIcon } from "../notification";
import { Notify } from "../notification/notification";
import { AnimatePresence } from "framer-motion";

function useForm() {
  const [values, setValues] = useState({ titulo: '', url: '' })
  return {
    values,
    handleChange: (e: FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value
      const name = e.currentTarget.name
      console.log(value)
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
  const form = useForm()
  const service = videoService()
  const [notify, setNotify] = useState(false)
  const [visible, setVisible] = useState(false)
  return (
    <StyledRegisterVideo>
      <button onClick={() => setVisible(!visible)} className='add-video'>+</button>
      {visible && <form onSubmit={(e) => {
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

        form.clearForm()
      }}>
        <div>
          <button onClick={() => setVisible(!visible)} className='close-modal'>x</button>
          <input
            required
            name='titulo'
            value={form.values.titulo}
            onChange={form.handleChange}
            placeholder="Titulo do video" />
          <input
            required
            name='url'
            value={form.values.url}
            onChange={form.handleChange}
            placeholder="Ensira a URL aqui" />
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
              <h1>
                ALURATUBE
              </h1>
            </Notify.Title>

            <Notify.Icon>
              <CloseIcon onClick={() => setNotify(!notify)}>
                <X size={20} />
              </CloseIcon>
            </Notify.Icon>

            <Notify.Body>
              <p>Video cadastrado, para ver o video atualize a página</p>
            </Notify.Body>
          </Notify.Root>
        )}
      </AnimatePresence>
    </StyledRegisterVideo>
  );
}

