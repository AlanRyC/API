import { CreateUser } from "../application/CreateUser";
import { productoRepositori } from "./UserRespository";
import { ProductosController } from "./UserControllers";
import { GetUserid } from "../application/GetUserid";
import { DelUserId } from "../application/DeleteUser";
import { PutUser } from "../application/PutUser";
import { GetUser } from "../application/GetUser";

const productoRes = new productoRepositori();
const createuser = new CreateUser(productoRes);
const getuser = new GetUser(productoRes);
const getuserid = new GetUserid(productoRes);
const deluserid = new DelUserId(productoRes);
const putuser = new PutUser(productoRes);

export const productosController = new ProductosController(
  createuser,
  getuser,
  getuserid,
  deluserid,
  putuser
);
