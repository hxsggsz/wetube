import { ReactNode } from "react";
import * as style from "."
import { X } from "phosphor-react";

const Root = ({ children }: { children: ReactNode }) => (
  <style.root>{children}</style.root>
)

const Container = ({ children }: { children: ReactNode }) => (
  <>
    <style.container
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
    >
      {children}
    </style.container>
  </>
)

const Close = ({ onClose }: { onClose: () => void }) => (
  <style.close><X onClick={onClose} size={26} weight="bold" /></style.close>
)

const Content = ({ children }: { children: ReactNode }) => (
  <style.content>{children}</style.content>
)

export const Modal = {
  Root,
  Close,
  Container,
  Content
}