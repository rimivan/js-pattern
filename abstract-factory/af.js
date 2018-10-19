class Car{
  constructor(license, model){
    this.license = license;
    this.model = model;
  }

  getLicense(){
    return this.license;
  }

  getModel(){
    return this.model;
  }
}

class CityCar extends Car{
  getDescription(){
    console.log("City car description");
  }
}

class SWCar extends Car{
  getDescription(){
    console.log("Station Wagon car description");
  }
}

class Tires{
  constructor(brand, material){
    this.brand = brand;
    this.material = material;
  }

  getMaterial(){
    return this.material;
  }

  getBrand(){
    return this.brand;
  }
}

class SWTires extends Tires{
  getDescription(){
    console.log("Tires for only SW");
  }
}

class CityCarTires  extends Tires{
  getDescription(){
    console.log("Tires for only City cars");
  }
}

/* Factories */
class FactoryOfCityCar{
  makeCityCar(){
    return new CityCar();
  }

  makeCityCarTires(){
    return new CityCarTires();
  }
}

class FactoryOfSWCar{
  makeSWCar(){
    return new SWCar();
  }

  makeSWCarTires(){
    return new SWTires();
  }
}


/* main */
const fSW = new FactoryOfSWCar(); // factory of SW cars with also tires
  const swCar = fSW.makeSWCar(); // sw car from factory sw
    swCar.getDescription(); // sw car description
  const swTires = fSW.makeSWCarTires(); // sw tires from factory sw
    swTires.getDescription(); // sw tires description
