import {DomainError} from "../../domain/errors/DomainError.js";

export class InvalidQuantity extends DomainError {}

export class Quantity {
    private constructor(readonly value: number) {}

    static create(value: number): Quantity {
        if (!Number.isInteger(value) || value <= 0) throw new InvalidQuantity("Quantity must be a positive integer");

        return new Quantity(value);
    }
}