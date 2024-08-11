{
  //----------------------------------------------------------------
  // Ternary Operator || Optional Chaining || Nullish Coalescing Operator

  const age: number = 16;
  if (age >= 18) {
    // console.log("Adult");
  } else {
    // console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  //   console.log({ isAdult });

  //   Nullish Coalescing Operator
  //   To make decisions based on Null / Undefined
  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  //   Optional Chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Kamrul Islam",
    address: {
      city: "CTG",
      road: "Mahamudabad",
      presentAddress: "CTG Village",
    },
  };
  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });
  //----------------------------------------------------------------
}
