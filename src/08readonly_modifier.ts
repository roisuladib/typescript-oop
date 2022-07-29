// Digunakan agar suatu property tidak bisa diubah datanya (immutable);
class Person {
   readonly gender: string = 'Laki-Laki';
}
const person = new Person();
