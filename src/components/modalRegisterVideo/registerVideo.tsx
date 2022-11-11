import { FormEvent, useState } from "react";
import { StyledRegisterVideo } from ".";
import { Notification } from "../notification/notification";

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

    handleForm() {
      values.titulo === '' || values.url === '' ? alert('preencha os campos corretamente') : true
    },

    clearForm() {
      setValues({ titulo: '', url: '' })
    }
  }
}

export const RegisterVideo: React.FC = () => {
  const form = useForm()
  const [visible, setVisible] = useState(false)
  
  return (
    <StyledRegisterVideo>
      <button onClick={() => setVisible(!visible)} className='add-video'>+</button>
      {visible && <form onSubmit={(e) => {
        e.preventDefault()
        form.handleForm()
        setVisible(!visible)
        form.clearForm()
      }}>
        <div>
          <button onClick={() => setVisible(!visible)} className='close-modal'>x</button>
          <input
            name='titulo'
            value={form.values.titulo}
            onChange={form.handleChange}
            placeholder="Titulo do video" />
          <input
            name='url'
            value={form.values.url}
            onChange={form.handleChange}
            placeholder="Ensira a URL aqui" />
          <button type='submit' >Cadastrar</button>
        </div>
      </form>}
      <Notification />
    </StyledRegisterVideo>
  );
}

