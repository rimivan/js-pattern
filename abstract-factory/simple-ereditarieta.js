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
  getBrand(){
    console.log("BMW");
  }

  getDescription(){
    console.log("General car");
  }
}

class CityCar extends Car{
  getDescription(){
    console.log("City car description");
  }
}

/* main */

const c1 = new CityCar("7yY7h", "C5");
  c1.getDescription();
  c1.getBrand();
  console.log("Qui license "+c1.getLicense());
