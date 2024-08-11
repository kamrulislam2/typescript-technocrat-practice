{
  //----------------------------------------------------------------
  // OOP - Class

  class Animal {
    // public name: string;
    // public species: string;
    // public sounds: string;

    // Parameter Properties
    constructor(
      public name: string,
      public species: string,
      public sounds: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sounds = sounds;
    }
    makeSound() {
      console.log(`This ${this.name} says ${this.sounds}`);
    }
  }

  const dog = new Animal("German Shepherd Bhai", "Dog", "Ghew Ghew");
  const cat = new Animal("Persian Cat", "Cat", "Meow Meow");

  dog.makeSound();

  //----------------------------------------------------------------
}
