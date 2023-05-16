import { IframeHTMLAttributes } from "react"
import { StyledIframe } from "."

interface IframeProps extends IframeHTMLAttributes<HTMLIFrameElement> { }

export const Iframe: React.FC<IframeProps> = ({ ...props }: IframeProps) => (
  <StyledIframe {...props} />
)