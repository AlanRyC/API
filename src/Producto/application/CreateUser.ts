import { ProductoRepository } from "../domain/User-repository";

export class CreateUser {
  constructor(readonly productoRepository: ProductoRepository) {}
  async createProducto(Nombre: string, Telefono: string, Correo: string) {
    return this.productoRepository
      .create(Nombre, Telefono, Correo)
      .then((createProductos) => {
        console.log("usuario creado");
        return createProductos;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
