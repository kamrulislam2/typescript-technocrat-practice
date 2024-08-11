{
  // Spread Operator
  // Rest Operator
  // Destructuring
  // ----------------------------------------------------------------

  // Learn Spread Operator
  const bros1: string[] = ["Mir", "Mizan", "Firoz"];
  const bros2: string[] = ["Tonmoy", "Nahid", "Rahat"];
  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };
  // ----------------------------------------------------------------

  // Learn Rest Operator
  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1}, ${friend2}, ${friend3}`);
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  greetFriends("Abul", "Kabul", "Babul", "Ubul", "Bulbul", "Rokibul");
}
