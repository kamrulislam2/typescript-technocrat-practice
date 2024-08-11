{
  //-------------------------------------------------------------
  // getter and setter methods
  class BankAccount {
    public readonly id: number;
    public readonly name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // using setter
    set AddDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // using getter
    get Balance() {
      return this._balance;
    }
    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goribAccount = new BankAccount(131, "Mr. Gorib", 20);
  //   goribAccount.balance=0;
  //   goribAccount.addDeposit(12); // deposit korar jonno ekhane function call korte hocche!!!
  //   const myBalance = goribAccount.getBalance(); // balance dekhar jonno o function  call korte hocche!!!
  goribAccount.AddDeposit = 120;
  const myBalance = goribAccount.Balance; // property er moto kore use korechi amra etake!!!
  console.log(myBalance);
  //-------------------------------------------------------------
}
