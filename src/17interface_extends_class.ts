class Animal17 {
   name: string;
   constructor(name: string) {
      this.name = name;
   }
}

interface IShark extends Animal17 {
   swim(): void
}

class Shrak implements IShark {
   name: string = 'Shark';
   cunstructor(name: string) {
      this.name = name;
   }
   swim(): void {
      console.log('Berenang');
   }
}