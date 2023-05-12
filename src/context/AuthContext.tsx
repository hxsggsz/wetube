import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import type { User } from "@supabase/supabase-js";
interface AuthProps {
  id: string
  email: string
  role: string
}

interface StateProps {
  user: User | undefined | null
  setUser: Dispatch<SetStateAction<User | undefined | null>>
}

const AuthContext = createContext({} as StateProps)

export const useAuth = () => useContext(AuthContext)


export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User | undefined | null>()
  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}