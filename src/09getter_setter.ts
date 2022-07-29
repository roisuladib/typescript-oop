class Product {
   private _price: number = 0;
   private diskon : number = 0.05;

   get price() {
      return this._price;
   }
   set price(value: number) {
      this._price = value - (value * this.diskon);
   }
}

const product = new Product();
product.price = 4000;
console.log(product);
