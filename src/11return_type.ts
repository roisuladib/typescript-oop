// Berfungsi untuk membatasi / mengatur type apa yang akan di return oleh sebuah method

class Burung {
   private kaki: number = 2;
   getKaki():number {
      return this.kaki;
   }
   terbang():void {
      console.log('Terbang');
   }
   async makan(): Promise<string> {
      return 'String';
   }
}