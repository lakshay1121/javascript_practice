console.log("we are in prototype inheritance.js");

const proto  = {

    slogan: function(){
       return `This company is the best`;
    },
    changeName: function(newName){
        this.name = newName;
    }
}

//this creates lakshay object.

// const lakshay = Object.create(proto);

// lakshay.name = 'lakshay';
// lakshay.role = 'programmer';
// lakshay.changeName('lakshay bhardwaj');
// console.log(lakshay);

//alternative syntax
//this also creates lakshay object

// const lakshay = object.create(proto , {
//     name: {value:'lakshay' , writable:true},
//     role:{value:'programmer'},
// })
// console.log(lakshay);

//employee constructor

function Employee(name , salary , experience){

    this.name = name; 
    this.salary = salary;
    this.experience = experience;
}

//slogan

Employee.prototype.slogan = function(){
    return `this company is the best regards ${this.name}`;
}

let lakshay = new Employee('lakshay', 10,000 , 23);
console.log(lakshay.slogan());

//programmer
function programmer(name , salary , experience , language){

    Employee.call(this , name , salary , experience );
    this.language = language;
}
//inheriting the prototype
programmer.prototype = Object.create(Employee.prototype);


let rohan = new programmer('rohan' , 200 , 2,'javascript');


console.log(rohan);