import axios from 'axios'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { StyledHeader } from '.'

interface HeaderProps {
  login: string,
  bio: string,
  avatar_url: string
}

export const Header: React.FC<HeaderProps> = ({ login, bio, avatar_url }: HeaderProps) => {
  return (
    <StyledHeader>
      <section>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatar_url} alt='avatar padrão' />

        <div>
          <h1>{login}</h1>
          <span>{bio}</span>
        </div>
      </section>

    </StyledHeader>
  );
}