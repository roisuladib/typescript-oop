interface Student {
   readonly name: string;
   readonly age: number;
}

let student: Student = { name: 'Djoko', age: 89 };
console.log(student);

// coba ubah maka dia akan error karena readonly
// student.name = 'Kang Mama';
