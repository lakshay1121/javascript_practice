console.log("this is error handling js");


//pretend ths is coming from mas server as  response.

//throwing error
let a = "harry bhai";
a  = undefined;


if (a != undefined) throw new Error("this  not undefined");

else console.log("this is not defined");


//handling , error

try {
    
    // jdljsldjgl

    console.log("we are inside try block");

    functionHarry();

} catch (error) {
    
    console.log("Are u okk?");
    // console.log(error.name);
    console.log(error.message);
}


//finally will run irespective of the error occurs or not.

finally{

    console.log("finally we will run this");
}

