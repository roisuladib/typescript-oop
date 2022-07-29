// Sebuah perjanjian / kontrak yang mana semua property / methode yang sudah disepakati didalam interface itu harus di implementasikan ke pada class yang menggunakan interface tersebut

interface Android {
   name: string;
   menu(): void;
   home(): void;
   back(): void;
}

class Samsung implements Android {
   name: string;
   constructor(name: string) {
      this.name = name;
   }
   menu(): void {
      console.log('Menu Tapped');      
   }
   home(): void {
      console.log('Home Tapped');     
   }
   back(): void {
      console.log('Back Tapped');     
   }
}

class Asus implements Android {
   name: string;
   constructor(name: string) {
      this.name = name;
   }
   menu(): void {
      console.log('Menu Tapped');      
   }
   home(): void {
      console.log('Home Tapped');     
   }
   back(): void {
      console.log('Back Tapped');     
   }
}

class Game {
   private phone: Android;
   cunstructor(phone: Android) {
      this.phone = phone;
   }
   back() {
      console.log('Kembali ke Menu');
   }
   menu() {
      this.phone.menu();      
   }
   home() {
      this.phone.home();
   }
}

const samsung = new Samsung('Samsung A10')
const game = new Game(samsung);
game.back();
game.menu();
game.home();

interface ApplePhone {
   home(): void;
}
class Iphone implements ApplePhone {
   name: string;
   Cunstructor(name: string) {
      this.name = name;
   }
   home(): void {
      console.log('Home Tapped');
   }
}

const iphone = new Iphone('Iphone XS');
const game2 = new Game(iphone)

