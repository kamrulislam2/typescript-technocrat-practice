{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Kamrul Islam",
    age: 26,
    gender: "Male",
    contactNo: "01700000000",
    address: "Sitakunda, Chattogram",
  };

  const student2: Student = {
    name: "Jannatul Mawa Taiba",
    age: 20,
    gender: "Female",
    address: "Rangunia, Chattogram",
  };

  const student3: Student = {
    name: "Jannatul Mawa Taiba",
    age: 20,
    gender: "Female",
    address: "Rangunia, Chattogram",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Taha";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
  //
}
