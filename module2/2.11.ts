{
  //----------------------------------------------------------------
  // Utility Types
  //----------------------------------------------------------------
  // Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;
  //----------------------------------------------------------------
  // Omit

  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  // Readonly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Kamrul Islam",
    age: 26,
    email: "kamrul@technocrat.com",
    contactNo: "01700000000",
  };

  //   person1.name = "mr xs";

  // Record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;

  const emptyObj: Record<string, unknown> = {};

  emptyObj.name = "Kamrul";

  const obj1: MyObj = { a: "aa", b: "bb" };
  //----------------------------------------------------------------
}
