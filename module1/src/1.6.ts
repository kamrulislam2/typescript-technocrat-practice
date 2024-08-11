{
  // Learning Function
  // Normal Function
  // Arrow Function
  // ----------------------------------------------------------------

  function add(num1: number, num2: number = 10): number {
    return num1 + num2;
  }
  add(2, 5);
  //----------------------------------------------------------------

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  addArrow(2, 5);
  //----------------------------------------------------------------

  // Object --> Function => Method

  const poorUser = {
    name: "Kamrul",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
    },
  };

  const arr: number[] = [1, 4, 10];

  const newArray: number[] = arr.map(
    (element: number): number => element * element
  );
}
