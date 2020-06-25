class Account {
  private value: number;
  private holderName: string;

  constructor(value: number, holderName: string) {
    this.value = value;
    this.holderName = holderName;
  }

  addAmount(amount: number): void {
    this.value += amount;
  }

  removeAmount(amount: number): void {
    this.value -= amount;
  }

  getValue(): number {
    return this.value;
  }

  getHolderName(): string {
    return this.holderName;
  }
}

const account: Account = new Account(0, "Diego");
const savingsAccount: Account = new Account(200, "Juliana");

savingsAccount.addAmount(800);
