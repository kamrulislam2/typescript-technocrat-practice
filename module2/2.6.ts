{
  //----------------------------------------------------------------
  // Constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 44,
    name: "Jannatul",
    email: "j@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent({
    id: 222,
    name: "Mr. X",
    email: "a@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 333,
    name: "Mr. Y",
    email: "x@gmail.com",
    devType: "NLWD",
    watch: "Apple Watch",
  });
  //----------------------------------------------------------------
}
