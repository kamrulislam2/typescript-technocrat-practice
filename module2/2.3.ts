{
  //----------------------------------------------------------------
  // Generic Type by Alias
  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  //   const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "Jannatul",
      age: 20,
    },
    {
      name: "Mawa",
      age: 22,
    },
    {
      name: "Taiba",
      age: 24,
    },
  ];

  //   Generic Tuple
  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Ms. Y"];

  const userWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Kamrul Islam", email: "abk@gmail.com" },
  ];

  //----------------------------------------------------------------
}
