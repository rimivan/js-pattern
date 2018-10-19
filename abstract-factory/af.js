class Car{
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

const c1 = new CityCar();
  c1.getDescription();
  c1.getBrand();
