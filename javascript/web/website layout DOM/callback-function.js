console.log("this is callback function tutorial!");


//assume taking students from server.

const students = [
   
    {name: "lakshay" , subject: "javascript"} ,

    {name: "rohan" , subject: "ml"}
]

//function enrollStudent().
//function getStudents().


//function with in a function is known as callback simply.

//callback function , after completing this call the function given.

function enrollStudent(student , callback){

    setTimeout( function() {
        
        students.push(student);

        callback();

    }, 5000);
}


function getStudents(student){

    setTimeout( function() {
        
        let str = "";

        students.forEach(function(student){

            str += `
             <li>${student.name} </li>    
            
            `
        });

        document.getElementById('students').innerHTML = str;
       
    }, 1000);
} 



let newStudent = {name:"sunny" , subject:"python"}

enrollStudent(newStudent , getStudents);
