import { StyledFavorites } from "."

interface FavoriteProps {
  thumb: string
  name: string
  favorites: {}
}

const Favorite: React.FC<FavoriteProps> = ({ ...props }: FavoriteProps) => {
  const title = Object.keys(props.favorites)
  return (
    <StyledFavorites>
      <h1>{title}</h1>

      <div>
        {title.map((item, index) => {
          const image = props.favorites[item]
          return (
            <div key={index}>
              {image.map((items: FavoriteProps) => (
                <div key={items.name}>
                  <section>
                    <img src={items.thumb} alt='avatar' />
                    <p>{items.name}</p>
                  </section>
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </StyledFavorites>
  );
}

export default Favorite;