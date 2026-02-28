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