import { ProductoRepository } from "../domain/User-repository";

export class GetUserid {
  constructor(readonly productoRepository: ProductoRepository) {}

  async Productoid(Correo: string) {
    return this.productoRepository
      .getById(Correo)
      .then((productoResolve) => {
        console.log(productoResolve);
        return productoResolve;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
