class Animal5 {
   name: string = '';
   kaki: number = 0;

   bernafas() {
      console.log('Bernafas');      
   }
}

class Burung4 extends Animal5 {
   color : string = 'red';
}

const burung4 = new Burung4();
burung4.name = 'Kenari';
burung4.kaki = 2;
burung4.color = 'orange';
console.log(burung4);
burung4.bernafas();
