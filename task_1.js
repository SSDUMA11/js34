let mixin = {
    vat(){
        return this.price + 0
    },
    exciseDuty(){
        return this.price + 0
    },
    singleTax(){
        return this.price + 0}
}

class Cola {
    constructor (brand, price) {
        this.brand = brand;
        this.price = price;
    }
}

Object.assign(Cola.prototype, mixin);
Cola.prototype.vat = function(){return this.price +=  this.price * 0.2};
let cocaCola = new Cola('Coca-Cola', 10);

console.log(cocaCola.vat()); 

class Whiskey {
    constructor (brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
Object.assign(Whiskey.prototype, mixin);
Whiskey.prototype.exciseDuty = function(){return this.price += ( + this.price * 0.3) + 10};
let johnWalker = new Whiskey('john walker', 100);

console.log(johnWalker.exciseDuty());

class Ice {
    constructor (price) {
        this.price = price;
    } 
}
Object.assign(Ice.prototype, mixin);
Ice.prototype.singleTax = function(){return this.price += + 1};
let ice = new Ice(2);

console.log(ice.singleTax());