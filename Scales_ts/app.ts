class Scales {

    productList:Array<Product>= [];
  
    add(product:Product):void {
      this.productList.push(product)
    }
  
    getSumScale ():number  {
      return this.productList.reduce(
        (sum:number, product:Product) :number => {
          sum += product.getScale();
          // sum += product.productCost
          return sum
        }, 0
      )
      
    }
  
    getNameList ():Array<string> {
      return this. productList.reduce (
        (totalProducts: Array<string>, product: Product) :Array<string> => {
          totalProducts.push(product.getName())
          return totalProducts
        }, []
      )
    }
  }
  
  class Product {
  
    private productName:string;
    private productCost:number;
  
    constructor(name:string , cost:number) {
      this.productName=name;
      this.productCost=cost;
    }
  
    getScale ():number {
      return this.productCost
    }
  
    getName ():string {
      return this.productName
    }
  }
  
  class Apple extends Product {
  
    constructor (costApple:number){
      super ("apple", costApple)
    }
  }
  
  class Tomato extends Product {
  
    constructor (costTomato:number) {
      super ("tomato", costTomato)
    }
  }

  class Pear extends Product {

    constructor (costPear:number){
        super ("pear", costPear)
    }
  }
  
  
  let scales:Scales = new Scales();
  
  let apple1:Apple = new Apple (25);
//   let apple2:Apple = new Apple (30);
  
  let tomato:Tomato = new Tomato (40);

  let pear:Pear = new Pear (35);
  
  scales.add(apple1);
  scales.add(tomato);
  scales.add(pear)
  
  console.log(scales.getNameList())
  console.log(scales.getSumScale())
