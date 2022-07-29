interface Vehicle {
   name: string;
   wheels: number;
}

interface Icar extends Vehicle {
   door: number;
}

class Civic implements Icar {
   name: string = 'Civic';
   wheels: number = 4;
   door: number = 2;
}