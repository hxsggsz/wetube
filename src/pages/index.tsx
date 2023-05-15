import config from '../../config.json'
import {Timeline} from "../components/timeline/timeline";
import Favorite from "../components/favorites/favorites";

export default function Home() {
  return (
    <>
      <Favorite thumb={""} name={""} favorites={config.favorites} />
      <Timeline />
    </>
  )
}
