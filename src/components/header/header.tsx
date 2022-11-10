import Image from 'next/image'
import { StyledHeader } from '.'

interface HeaderProps {
  name: string 
  job: string
  github: string
}
 
export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return ( 
    <StyledHeader>
      <section>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`https://github.com/${props.github}.png`} alt='avatar padrão'/>

        <div>
          <h1>{props.name}</h1>
          <span>{props.job}</span>
        </div>
      </section>

    </StyledHeader>
   );
}