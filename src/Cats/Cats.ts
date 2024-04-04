class Cat {
  constructor(public name: string, public age: number) {}

  meow(): void {
    console.log(`${this.name}, age ${this.age} says Meow`);
  }
}

function createCats(catInfo: string[]): void {
  catInfo.forEach((catString) => {
    const [name, ageString] = catString.split(" ");
    const age = parseInt(ageString);
    const cat = new Cat(name, age);
    cat.meow();
  });
}

const catInfo: string[] = ["Mellow 2", "Tom 5"];
const catInfo2: string[] = ["Candy 1", "Poppy 3", "Nyx 2"];
createCats(catInfo);
createCats(catInfo2);
