{
  //----------------------------------------------------------------
  // Basic Promise

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };
  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return data;
    // console.log(data);
  };

  getTodo();

  type Something = {
    something: string;
  };
  //   Simulate
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "Something" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to lead data");
      }
    });
  };

  //   Calling create promise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    // console.log(data);
    return data;
  };

  showData();
  //----------------------------------------------------------------
}
