import { DomainError } from "../errors/DomainError.js";

export class InvalidSKU extends DomainError {}

export class SKU {
  private constructor(readonly value: string) {}

  static create(value: string): SKU {
    if (!value || value.trim() === "") throw new InvalidSKU("SKU cannot be empty");
    return new SKU(value.trim());
  }
}