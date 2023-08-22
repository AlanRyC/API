import { ProductoRepository } from "../domain/User-repository";

export class GetUser {
  constructor(readonly productoRepository: ProductoRepository) {}

  async AllProducto() {
    return this.productoRepository
      .getUser()
      .then((productoResolve) => {
        console.log(productoResolve);
        return productoResolve;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
