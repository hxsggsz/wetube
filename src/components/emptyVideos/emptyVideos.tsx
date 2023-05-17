import { Empty } from "."
import Image from "next/image"

export const EmptyVideos = () => {
  return (
    <Empty>
      <h2>Seus videos aparecerão aqui!</h2>
      <Image src="/empty.png" width={760} height={560} alt="imagem de um esqueleto assustado" />
      <h3>Nenhum video ainda :( </h3>
    </Empty>
  )
}
