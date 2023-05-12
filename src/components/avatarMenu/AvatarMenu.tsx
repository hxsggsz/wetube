import * as Avatar from '@radix-ui/react-avatar';
import { useAuth } from '../../context/AuthContext';
import { AvatarWrapper } from '.';

export const AvatarMenu = () => {
  const { image, user } = useAuth()

  return (
    <AvatarWrapper>
      <Avatar.Root className="AvatarRoot">
        <Avatar.Image
          className="AvatarImage"
          src={image}
          alt={`image de perfil do ${user?.user_metadata.name}`}
        />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          CT
        </Avatar.Fallback>
      </Avatar.Root>
    </AvatarWrapper>
  )
}