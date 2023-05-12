import { Dispatch, InputHTMLAttributes, SetStateAction, forwardRef } from "react";
import { StyledInput, StyledWrapper } from ".";
import { Eye, EyeSlash } from "phosphor-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean
  HandlePassword?: string
  setHandlePassword?: Dispatch<SetStateAction<string>>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function InputContent({ ...props }: InputProps, ref) {
  return (
    <StyledWrapper>
      <StyledInput {...props} ref={ref} />
      {props.isPassword && (
        <div>
          {props.HandlePassword === "password" ?
            <Eye
              size={24}
              cursor="pointer"
              onClick={() => props.setHandlePassword!(prev => prev === "password" ? "text" : "password")}
            />
            :
            <EyeSlash
              size={24}
              cursor="pointer"
              onClick={() => props.setHandlePassword!(prev => prev === "password" ? "text" : "password")}
            />}
        </div>  
      )}
    </StyledWrapper>
  )
})