{
  //----------------------------------------------------------------
  //   Generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "Bike" | "Car" | "Ship"; // Manually

  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "John",
    age: "20",
    address: "ctg",
  };

  const car = {
    model: "Toyota 100",
    year: 2008,
  };
  const result1 = getPropertyValue(car, "model");

  const person1: Owner2 = "bike";

  //   user["age"] //26;
  //----------------------------------------------------------------
}
