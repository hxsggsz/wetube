import { FormEvent, useState } from "react"
import { supabase } from "../services/videoService"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function signup(ev: FormEvent) {
    ev.preventDefault()
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: senha
    })
  }

  return (
    <form onSubmit={signup}>
      <input style={{color: "black"}} value={email} onChange={(ev) => setEmail(ev.currentTarget.value)} placeholder="email" type="text" />
      <input style={{color: "black"}} value={senha} onChange={(ev) => setSenha(ev.currentTarget.value)} placeholder="senha" type="password" />
      <button type="submit">entrar</button>
    </form>
  )
}