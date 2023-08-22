import { ProductoRepository } from "../domain/User-repository";

export class DelUserId {
  constructor(readonly productoRepository: ProductoRepository) {}

  async Userid(Correo: string) {
    return this.productoRepository
      .deleteById(Correo)
      .then((productoResolve) => {
        console.log(productoResolve);
        return productoResolve;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
