import { FastifyRequest, FastifyReply } from "fastify";
import { CreateOrder } from "../../application/use-cases/CreateOrderUseCase.js";

export class OrdersController {
  constructor(private readonly createOrder: CreateOrder) {}

  async create(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    // El as any es un cast temporal para decirle a TypeScript que no compruebe el tipo del body por ahora.
    // En un proyecto real esto se reemplazaría por validación con una librería como Zod.
    const { orderId, customerId } = req.body as any;

    const out = await this.createOrder.execute({ orderId, customerId });

    reply.code(201).send(out);
  }
}