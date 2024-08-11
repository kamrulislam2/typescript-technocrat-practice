{
  //----------------------------------------------------------------
  // Type Assertions
  let anything: any;

  anything = "Next Level Web Development";
  anything = 123;
  //   (anything as number).;

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is: ${convertedValue}`;
    } else if (typeof value === "number") {
      return value * 1000;
    } else {
      return undefined;
    }
  };
  const result1 = kgToGram(1000) as number;
  const result2 = kgToGram("1000") as string;
  console.log({ result1 }, { result2 });

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //----------------------------------------------------------------
}
