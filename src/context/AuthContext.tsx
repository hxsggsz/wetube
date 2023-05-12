import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState, useEffect } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../services/videoService";

interface StateProps {
  user: User | undefined | null
  setUser: Dispatch<SetStateAction<User | undefined | null>>
  image: string
  setImage: Dispatch<SetStateAction<string>>
}

const AuthContext = createContext({} as StateProps)

export const useAuth = () => useContext(AuthContext)

const getImageFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const image = localStorage.getItem("profilePicture")
    if (image) {
      return JSON.parse(image)
    }
  }

  return ""
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined | null>()
  const [image, setImage] = useState(getImageFromLocalStorage())

  useEffect(() => {
    const currentUser = supabase.auth.user()
    currentUser && setUser(currentUser)
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, image, setImage }}>
      {children}
    </AuthContext.Provider>
  )
}