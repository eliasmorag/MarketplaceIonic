import { Producto } from "../app/producto";
import {Profile} from "./profile"

export interface Comentario {
    usuario: string;
    fecha:number;
    producto: Producto;
    comentario: string;
  }