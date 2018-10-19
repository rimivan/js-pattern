class Person{
    getDescription(){
      console.log("Simple person!");
    }
}

class Student extends Person{
  getDescription(){
    console.log("Student!");
  }
}

class Worker extends Person{
  getDescription(){
    console.log("Worker!");
  }
}


class Manager {
  talkWithPeople(){
    const interlocutor = this.makeInterlocutor();
      interlocutor.getDescription();
  }
}

class ProjectManager extends Manager{
  makeInterlocutor(){
    return new Student();
  }
}

class DeliveryManager extends Manager{
  makeInterlocutor(){
    return new Worker();
  }
}

/* main */

const pm = new ProjectManager();
  pm.talkWithPeople();

const dm = new DeliveryManager();
  dm.talkWithPeople();
