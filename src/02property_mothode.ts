class Animal3 {
   name: string = '';
   kaki: number = 0;
   mamalia: boolean = false;

   bernafas():void {
      console.log(`${this.name} sedang bernafas`);
   }
}

const animal3 = new Animal3();
animal3.name = 'Kuda';
animal3.kaki = 4;
console.log(animal3);
animal3.bernafas();
