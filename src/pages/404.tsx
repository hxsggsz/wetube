import { Button } from "../components/button/button";
import Image from "next/image";
import Link from "next/link";
import { NotFound } from "../../styles/404";

export default function Pagina404() {
  return (
    <NotFound>
      <h1>Página não encontrada</h1>
      <Image src="/404.png" width={600} height={430} alt="imagem de um esqueleto assustado" />
      <Link href="/">Página inicial</Link>
    </NotFound>
  )
}