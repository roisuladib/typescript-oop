// Sebuah class yang tidak bisa di instatiansi secara langsung oleh client, karena memang bentuknya masih belum jelas / bisa juga sebagai template yang mana di setiap class yang mengextendsnya harus mengimplementasikan methode yang sudah di tentukan si abstact class ini
// Harus ada 1 asbtrac methode

abstract class Animal12 {
   name: string = '';
   constructor(name: string) {
      this.name = name;
   }
   makan():void {
      console.log(`${this.name} Sedang Makan`);      
   }

   // Belum jelas
   abstract bergerak(): void;
}

class Kucing12 extends Animal12 {
   constructor() {
      super('Kucing');
   }
   bergerak(): void {
      console.log('Kucing Berjalan');
   }
}

class Burung12 extends Animal12 {
   constructor() {
      super('Burung');
   }
   bergerak(): void {
      console.log('Burung Terbang');
   }
}

const kucing12 = new Kucing12();
kucing12.bergerak();

const burung12 = new Burung12();
burung12.bergerak();