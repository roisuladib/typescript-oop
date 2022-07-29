// Menempel Pada class itu sendiri

class Ayam {
   static kaki: number = 2;
   static jalan() {
      console.log(`Ayam berjalan dengan ${this.kaki}`);
   }
   getKaki() {
      // console.log(this.kaki);   
      // Harus panggil classnya
      console.log(Ayam.kaki);  
   }
}

// Static bisa langsung panggil classnya
console.log(Ayam.jalan());

const ayam = new Ayam();
ayam.getKaki();

///////////////////////////////////
const ayam2 = new Ayam();
const ayam3 = new Ayam();
const ayam4 = new Ayam();
const ayam5 = new Ayam();

console.log(ayam2.getKaki());
console.log(ayam3.getKaki());
console.log(ayam4.getKaki());
console.log(ayam5.getKaki());

// Misal kita ubah kaki
Ayam.kaki = 3;

console.log(ayam2.getKaki());
console.log(ayam3.getKaki());
console.log(ayam4.getKaki());
console.log(ayam5.getKaki());


