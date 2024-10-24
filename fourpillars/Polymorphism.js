class tao{
      constructor(name){
           this.name = name;
       }

       sayName(){
           console.log(this.name);
         }
}

class istudyante extends tao{
     constructor(name, rollNumber){
        super(name);
        this.rollNumber = rollNumber;
    }

        logDetails(){
        console.log(`Name: ${this.name}, Roll
        number: ${this.rollNumber}`)
        }

        sayName(){
        console.log("From Student");
        super.sayName();
        }

}
        var Istudyante = new istudyante("Sander", 1);
        Istudyante.logDetails();
        Istudyante.sayName();

    