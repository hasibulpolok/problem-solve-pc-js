const user = {
  name: "Polok",
  greet: function () {
    // return(`My name is ${this.name}`);
    console.log(`My name is ${this.name}`)
  }
};

user.greet();

const user2 = {
    name:"Ridu",
    age:25,
    ridu: function(){
        console.log(`My name is ${this.name}`)
    }
}

user2.ridu();

function Person(f,l,fn){
this.firstName = f;
this.tName = l;
this.fullName = fn;
}

let fuck = new Person("Redoy","Hossain","Ridoy Hossain");
console.log(sname.firstName, sname.tName, sname.fullName)
