import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState, useEffect } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../services/videoService";

interface StateProps {
  user: User | undefined | null
  setUser: Dispatch<SetStateAction<User | undefined | null>>
}

const AuthContext = createContext({} as StateProps)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined | null>()

  useEffect(() => {
    const currentUser = supabase.auth.user()
    currentUser && setUser(currentUser)
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}