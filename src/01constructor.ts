// Sebuah method yang nanti akan di panggil terlebih dahulu ketika sebuah object dibuat menggunakan class
class Animal2 {
   constructor() {
      console.log('Cunstructor akan di panggil terlebih dahulu');   
   }
}

const animal2 = new Animal2();