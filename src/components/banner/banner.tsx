import { StyledBanner } from "."

interface BannerProps {
  image: string
}
 
export const Banner: React.FC<BannerProps> = ({ image }: BannerProps) => ( 
  <StyledBanner>
    <img src={image} />
  </StyledBanner>
)