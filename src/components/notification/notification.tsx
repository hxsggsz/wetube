import { BodyStyled, RootStyle, TimerStyled, TitleStyle } from "."
import { ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"

interface NotiProps {
  children: ReactNode
}

const NotifyRoot: React.FC<NotiProps> = ({ children }: NotiProps) => (
    <RootStyle
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      {children}
    </RootStyle>
  )

const NotifyIcon: React.FC<NotiProps> = ({ children }: NotiProps) => (
    <Slot>
      {children}
    </Slot>
  )

const NotifyTitle: React.FC<NotiProps> = ({ children }: NotiProps) => (
    <TitleStyle>{children}</TitleStyle>
  )

const NotifyTimer: React.FC = () => (
  <TimerStyled
    animate={{ scaleX: 100 }}
    transition={{ duration: 10 }}
  />
)

const NotifyBody: React.FC<NotiProps> = ({ children }: NotiProps) => (
    <BodyStyled>{children}</BodyStyled>
  )

export const Notify = {
  Root: NotifyRoot,
  Icon: NotifyIcon,
  Title: NotifyTitle,
  Timer: NotifyTimer,
  Body: NotifyBody,
}