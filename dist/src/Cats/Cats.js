"use strict";
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
function createCats(catInfo) {
    catInfo.forEach((catString) => {
        const [name, ageString] = catString.split(" ");
        const age = parseInt(ageString);
        const cat = new Cat(name, age);
        cat.meow();
    });
}
const catInfo = ["Mellow 2", "Tom 5"];
const catInfo2 = ["Candy 1", "Poppy 3", "Nyx 2"];
createCats(catInfo);
createCats(catInfo2);
//# sourceMappingURL=Cats.js.map