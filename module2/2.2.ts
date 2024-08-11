{
  //----------------------------------------------------------------
  //   Type Alias for Object
  type User1 = {
    name: string;
    age: number;
  };

  // Type Interface for Object
  interface User2 {
    name: string;
    age: number;
  }

  // Type Alias for Object
  type UserWithRole1 = User1 & { role: string };

  //   Type Interface for Object
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user1: UserWithRole2 = {
    name: "Kamrul Islam",
    age: 26,
    role: "Manager",
  };

  //----------------------------------------------------------------
  //   Type Alias for Array
  type Roll1 = number[];

  //   Type Interface for Array
  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];

  //----------------------------------------------------------------
  //   Type Alias for Function
  type Add1 = (num1: number, num2: number) => number;

  //   Type Interface for Function
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;

  //----------------------------------------------------------------
}
