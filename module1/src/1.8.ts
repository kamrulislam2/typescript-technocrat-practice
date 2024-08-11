// Destructuring

{
  // Object Destructuring
  const user = {
    id: 345,
    name: {
      firstName: "Jannatul",
      middleName: "Mawa",
      lastName: "Taiba",
    },
    contactNo: "01600001122",
    address: "Uganda",
  };

  const {
    contactNo,
    name: { middleName },
  } = user;
  //   ----------------------------------------------------------------

  // Array Destructuring
  const myFriends: string[] = [
    "Chandler",
    "Joey",
    "Ross",
    "Rachael",
    "Monica",
    "Phoebe",
  ];
  const [, , bestFriend, ...rest] = myFriends;
}
