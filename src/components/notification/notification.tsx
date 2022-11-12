import { BodyStyled, RootStyle, TitleStyle } from "."
import { ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"

interface NotiProps {
  children: ReactNode
}

const NotifyRoot: React.FC<NotiProps> = ({ children }: NotiProps) => {
  return (
    <RootStyle
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      {children}
    </RootStyle>
  )
}

const NotifyIcon: React.FC<NotiProps> = ({ children }: NotiProps) => {
  return (
    <Slot>
      {children}
    </Slot>
  )
}

const NotifyTitle: React.FC<NotiProps> = ({ children }: NotiProps) => {
  return (
    <TitleStyle>{children}</TitleStyle>
  )
}

const NotifyBody: React.FC<NotiProps> = ({ children }: NotiProps) => {
  return (
    <BodyStyled>{children}</BodyStyled>
  )
}

export const Notify = {
  Root: NotifyRoot,
  Icon: NotifyIcon,
  Title: NotifyTitle,
  Body: NotifyBody,
}