import { Currency } from "./Currency.js";
import { DomainError } from "../errors/DomainError.js";

export class InvalidPrice extends DomainError {}
export class CurrencyMismatch extends DomainError {}

export class Price {
  private constructor(readonly amount: number, readonly currency: Currency) {}

  static create(amount: number, currency: Currency): Price {
    if (!Number.isFinite(amount) || amount < 0) throw new InvalidPrice("Invalid price amount");

    const rounded = Math.round(amount * 100) / 100;
    return new Price(rounded, currency);
  }

  add(other: Price): Price {
    if (this.currency !== other.currency) throw new CurrencyMismatch(
      'Cannot add prices with different currencies: ${this.currency} and ${other.currency}'
    );

    return Price.create(this.amount + other.amount, this.currency);
  }

   multiply(qty: number): Price {
    if (!Number.isInteger(qty) || qty <= 0) throw new InvalidQuantity("Invalid quantity");
    return Price.create(this.amount * qty, this.currency);
  }

  equals(other: Price): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }
}