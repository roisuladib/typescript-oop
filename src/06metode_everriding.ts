// Mereplace method yg sudah ada di parent classnya
class Animal7 {
   name: string = '';
   bernafas() {
      console.log('Sedang Bernafas');      
   }
}
class Katak7 extends Animal7 {
   bernafas() {
      console.log('Malas Bernafas');      
   }
}

const katak7 = new Katak7();
katak7.bernafas();