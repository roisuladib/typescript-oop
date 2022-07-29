class Animal4 {
   name: string;
   kaki: number;
   constructor(name: string, kaki: number) {
      this.name = name;
      this.kaki = kaki;
   }
}

const burung = new Animal4('Burung', 2);
console.log(burung);


// Cara 2

class Animal41 {
   constructor(public name: string, public kaki: number) {};
}
const manuk = new Animal41('Manuk', 3);
console.log(manuk);
