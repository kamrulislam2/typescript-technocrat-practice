// Reference type --> Object
//----------------------------------------------------------------

const user: {
  readonly company: string;
  // company: 'Programming Hero'; // Type --> Literal type
  firstName: string;
  middleName?: string; // Type --> Optional Type
  lastName: string;
  isMarried?: boolean;
} = {
  company: "Programming Hero",
  firstName: "Kamrul",
  lastName: "Islam",
  isMarried: true,
};

// user.company='PH'
