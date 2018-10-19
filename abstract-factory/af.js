class Car{
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

Car c1 = new CityCar();
  c1.getDescription();
