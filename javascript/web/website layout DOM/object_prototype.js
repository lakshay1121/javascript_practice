console.log("we are in object_prototype.js");

//object literal

let obj = {
    name:'lakshay',
    channel:'learn to code',
    address:'earth'
}

console.log(obj);



function abc(givenName){

    this.name = givenName;
}

abc.prototype.getName = function (){
    return this.name ;
}

abc.prototype.setName = function (newName){
     this.name = newName;
}
let obj2 =  new abc('lakshay bhardwaj');
console.log(obj2);

//prototype means from where you have started to create.protoypes are which which are already available, with the help  of prototype we make new objects.

//never change obj . prototype , make a new object than u can change the prototype for that.

