interface Teacher {
   name: string;
   age: number;
   phone?: string;
}
let teacher: Teacher = { name: 'Djoko', age: 56, phone: '0396363465' };

console.log(teacher);