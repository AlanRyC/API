import { Producto } from "./ProducUser";
export interface ProductoRepository {
  create(Nombre: string, Telefono: string, Correo: string): Promise<Producto>;
  getUser(): Promise<Producto[] | null>;
  getById(Correo: string): Promise<Producto | null>;
  deleteById(Correo: string): Promise<Producto | null>;
  putUser(Nombre: string, Telefono: string, Correo: string): Promise<Producto>;
}
