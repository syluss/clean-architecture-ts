import { DomainError } from "../errors/DomainError.js";

export class InvalidOrderId extends DomainError {}

export class OrderId {
  private constructor(readonly value: string) {}

  static create(value: string): OrderId {
    if (!value || value.trim() === "") throw new InvalidOrderId("OrderId cannot be empty");
    return new OrderId(value.trim());
  }
}   