import Fastify from "fastify";
import { OrdersController } from "./OrdersController.js";
import { createOrder } from "../../composition/container.js";

export function buildServer() {
  const app = Fastify();
  const ordersController = new OrdersController(createOrder);

  app.post("/orders", (req, reply) => ordersController.create(req, reply));

  return app;
}