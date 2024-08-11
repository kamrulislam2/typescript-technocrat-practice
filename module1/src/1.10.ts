{
  //----------------------------------------------------------------
  // Union Type
  // type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  // type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";
  // type Developer = FrontendDeveloper | FullstackDeveloper;
  // const newDeveloper: FrontendDeveloper = "juniorDeveloper";
  // type User = {
  //   name: string;
  //   email?: string;
  //   gender: "Male" | "Female";
  //   bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  // };
  // const user1: User = {
  //   name: "Kamrul Islam",
  //   gender: "Male",
  //   bloodGroup: "AB+",
  // };
  // ----------------------------------------------------------------
  // Intersection Type
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS", "Express", "JavaScript"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
  //----------------------------------------------------------------
}
