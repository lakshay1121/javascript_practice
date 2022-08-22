console.log("this is tutorial for es6 classes and inheritance");

class Employee {

    constructor(name, experience, division) {

        this.name = name;
            this.experience = experience;
            this.division = division;
}

slogan(){
    return `I am ${this.name} and i have ${this.experience} years of experience in this company and this company is the best! `
}

joiningYear(){

    return 2022 - this.experience;
}


//static, means without using the object of the class.

static add(a, b){
    return a + b;
}
}  

class programmer extends Employee{
    constructor(name ,experience , division , language, github){
        super(name , experience , division);
        this.language = language;
        this.github = github;
    }

     favouriteLanguauge(){
        if(this.language == "python"){
            return 'python';
        }

        else{
            return 'javascript';
        }
    }

    static multiply(a , b){
        return a*b;
    }
}

// lakshay = new Employee("lakshay" , 2 , "division");
// console.log(lakshay);

rohan = new programmer('rohan' , 3,'lays','english','rohan420');
console.log(rohan);
console.log(rohan.favouriteLanguauge());
