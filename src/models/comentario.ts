import { Producto } from "../app/producto";

export interface Comentario {
    usuario: string;
    fecha:number;
    producto: Producto;
    comentario: string;
  }