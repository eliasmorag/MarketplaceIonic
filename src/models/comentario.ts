import { Producto } from "../app/producto";
import {Profile} from "./profile"

export interface Comentario {
    usuario: string;
    fecha:string;
    producto: Producto;
    comentario: string;
  }