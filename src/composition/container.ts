import { InMemoryOrderRepository } from "../infrastructure/persistence/InMemoryOrderRepository.js";
import { CreateOrder } from "../application/use-cases/CreateOrderUseCase.js";

const orderRepository = new InMemoryOrderRepository();

export const createOrder = new CreateOrder(orderRepository);