import { DomainError } from "../errors/DomainError.js";

export class InvalidCustomerId extends DomainError {}

export class CustomerId {
  private constructor(readonly value: string) {}

  static create(value: string): CustomerId {
    if (!value || value.trim() === "") throw new InvalidCustomerId("CustomerId cannot be empty");
    return new CustomerId(value.trim());
  }
}