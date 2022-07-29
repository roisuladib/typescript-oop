// Super Constructor @ digunakan untuk memanggil constructor milik class parentnya yang mana property dari class parent akan di isi melalui cunstructor dari child
class Animal6 {
   name: string;
   kaki: number;
   constructor(name: string, kaki: number) {
      this.name = name;
      this.kaki = kaki;
   }
};

class Katak6 extends Animal6 {
   beracun: boolean;
   constructor(name: string, kaki: number, beracun: boolean) {
      super(name, kaki);
      this.beracun = beracun;
   }
};

const katak6 = new Katak6('Katak', 4, false);
console.log(katak6);


