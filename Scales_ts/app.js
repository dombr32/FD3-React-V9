var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.productList = [];
    }
    Scales.prototype.add = function (product) {
        this.productList.push(product);
    };
    Scales.prototype.getSumScale = function () {
        return this.productList.reduce(function (sum, product) {
            sum += product.getScale();
            // sum += product.productCost
            return sum;
        }, 0);
    };
    Scales.prototype.getNameList = function () {
        return this.productList.reduce(function (totalProducts, product) {
            totalProducts.push(product.getName());
            return totalProducts;
        }, []);
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(name, cost) {
        this.productName = name;
        this.productCost = cost;
    }
    Product.prototype.getScale = function () {
        return this.productCost;
    };
    Product.prototype.getName = function () {
        return this.productName;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(costApple) {
        return _super.call(this, "apple", costApple) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(costTomato) {
        return _super.call(this, "tomato", costTomato) || this;
    }
    return Tomato;
}(Product));
var Pear = /** @class */ (function (_super) {
    __extends(Pear, _super);
    function Pear(costPear) {
        return _super.call(this, "pear", costPear) || this;
    }
    return Pear;
}(Product));
var scales = new Scales();
var apple1 = new Apple(25);
//   let apple2:Apple = new Apple (30);
var tomato = new Tomato(40);
var pear = new Pear(35);
scales.add(apple1);
scales.add(tomato);
scales.add(pear);
console.log(scales.getNameList());
console.log(scales.getSumScale());
//# sourceMappingURL=app.js.map