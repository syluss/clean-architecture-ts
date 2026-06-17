export class Price {
  private constructor(
    readonly amount: number,
    readonly currency: "EUR" | "USD"
  ) {}

  static create(amount: number, currency: "EUR" | "USD"): Price {
    if (!Number.isFinite(amount) || amount < 0)
        // Este error podría ser un error coustomizado, que iría dentro de domino/errors/,
        // pero para este ejemplo es suficiente con un error genérico.
        throw new Error("Invalid amount"); 

    const rounded = Math.round(amount * 100) / 100;
    return new Price(rounded, currency);
  }
}