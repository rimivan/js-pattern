class Car{
    constructor(builder){
        this.tires = builder.tires; // from builder
        this.color = builder.color;
        this.customization = builder.customization;
        console.log("Car initialized");
    }

    getTires(){
        return this.tires;
    }

    getColor(){
        return this.color;
    }

    getCustomization(){
        return this.customization;
    }
}


class CarBuilder{
    addColor(){
        this.color = "Color";
        return this;
    }

    addTires(){
        this.tires = "Tires";
        return this;
    }

    addCustomization(){
        this.customization = "Customization";
        return this;
    }

    build(){
        return new Car(this);
    }
}

console.log("=========================First Car==========================================");
    const myCar = new CarBuilder();
    myCar.build(); //initialize a car without customization
    console.log("MyCar: ",myCar.build().getColor(),myCar.build().getTires(),myCar.build().getCustomization());

console.log("==========================Second Car=========================================");
    const mySecondCar = new CarBuilder();
    mySecondCar.addTires();
    mySecondCar.addColor();
    mySecondCar.addCustomization();
    console.log("MyCar: ",mySecondCar.build().getColor(),mySecondCar.build().getTires(),mySecondCar.build().getCustomization());
