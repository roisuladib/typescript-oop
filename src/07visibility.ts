// Access Modifier digunakan untuk mengatur dan membatasi akses dari property / methode yang ada pada sebuah class
// public: bisa digunakan di mana saja
// protected : bisa digunakan class sendiri dan turunannya
// private : bisa di panggil di class sendiri

class Animal8 {
   public name: string | undefined;
   private kaki: number | undefined;
   protected mamalia: boolean | undefined;
   
   cunstructor(name: string, kaki: number, mamalia: boolean) {
      this.name = name;
      this.kaki = kaki;
      this.mamalia = mamalia;
   }
   berjalan() {}
}
class Katak8 extends Animal8 {
   private umurTelur: number = 4;
   private umurKecebong: number = 7;
   private umurKatak: number = 20;

   getUmur() {
      console.log(this.umurTelur + this.umurKecebong + this.umurKatak);
   }
}

const katak8 = new Katak8();
katak8.getUmur();



