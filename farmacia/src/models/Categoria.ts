import Produto from "./Produto";

export default interface Categoria {
    tipo: string | number | readonly string[] | undefined;
    id: number;
    nome: string;
    produto?: Produto | null;
  }