import { Producto } from "../app/producto";
import {Profile} from "./profile"

export interface Comentario {
    usuario: Profile;
    producto: Producto;
    comentario: string;
  }