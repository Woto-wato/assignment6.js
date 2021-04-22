class KioskCalc {
    constructor(_fruitprice,_fruit,_quantity){
    this.fruitprice={
        "orange": 30, 
        "mango": 15, 
        "avocado": 40
    }
   console.log(this.fruitprice)
    this.fruit = "orange",
    this.quantity=2;
    };
    getTotalCost(){
        return`${this.quantity},${this.fruit} for Ksh ${30*this.quantity}`;
    };
};
var kioskCalc=new KioskCalc()
console.log(kioskCalc.getTotalCost());