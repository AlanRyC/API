import { ProductoRepository } from "../domain/User-repository";

export class PutUser {
  constructor(readonly productoRepository: ProductoRepository) {}
  async putUser(Nombre: string, Telefono: string, Correo: string) {
    return this.productoRepository
      .putUser(Nombre, Telefono, Correo)
      .then((createProductos) => {
        console.log(createProductos);
        return createProductos;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
