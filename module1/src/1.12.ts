{
  //----------------------------------------------------------------
  // Nullable Type | Unknown Type | Never Type

  // Nullable Type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  searchName(null);

  //   Unknown Typeof
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is: ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [number, unit] = value.split(" ");
      const convertedSpeed = (parseInt(number) * 1000) / 3600;
      console.log(`The speed is: ${convertedSpeed} ms^-1`);
    } else {
      console.log("Wrong Input");
    }
  };
  getSpeedInMeterPerSecond(`3360 kmh^-1`);

  //   Never Type
  const throwError = (message: string): never => {
    throw new Error(message);
  };
  throwError("Mushkil Se Error Hogaya");
  //----------------------------------------------------------------
}
