{
  //-------------------------------------------------------------
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public readonly name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      return this._balance;
    }
  }

  // class StudentAccount extends BankAccount {
  //   test() {
  //     this._balance;
  //   }
  // }

  const goribAccount = new BankAccount(131, "Mr. Gorib", 20);
  //   goribAccount.balance=0;
  goribAccount.addDeposit(12);
  const myBalance = goribAccount.getBalance();
  console.log(myBalance);
  //-------------------------------------------------------------
}
