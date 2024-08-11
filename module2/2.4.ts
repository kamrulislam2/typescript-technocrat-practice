{
  //----------------------------------------------------------------
  // Generic Type by Interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack?: boolean;
    sleepTrack?: boolean;
  }

  interface YamahaBike {
    brand: string;
    model: string;
    color: string;
    year: number;
  }

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Kamrul Islam",
    computer: {
      brand: "Dell",
      model: "inspiron 3501",
      releaseYear: 2021,
    },
    smartWatch: {
      brand: "Emilab",
      model: "E1",
      display: "OLED",
    },
  };

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Jannatul Mawa",
    computer: {
      brand: "Apple",
      model: "i5",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "H5",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Yamaha",
      model: "YZF-R1",
      color: "Blue",
      year: 2021,
    },
  };
  //----------------------------------------------------------------
}
