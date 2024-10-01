class Person {
    constructor(name, age, occupation, major){
       this.name = name;
       this.age = age;
       this.occupation = occupation;
       this.major = major;

    }    
}
const person = new Person("March", 24, "Instructor", "Programming");

      console.log("Name: " + person.name);
      console.log("Age: " + person.age);
      console.log("Occupation: " + person.occupation);
      console.log("Major: " + person.major);

document.getElementById("information").innerHTML = "Name: " + person.name + "<br>" +
                                                    "Age: " + person.age + "<br>" +
                                                    "Occupation: " + person.occupation + "<br>" +
                                                    "Major: " + person.major;
                                                 
 