console.log("ajax tutorial");

let fetchbtn = document.getElementById('fetch-Data');

fetchbtn.addEventListener('click', buttonclickhandler);

function buttonclickhandler() {

    console.log("you have clicked the fetch btn button.");
    //instantiate an xhr object.




    const xhr = new XMLHttpRequest();

    //open the object.

    //true means asynchronous call and false means , synchronous call.

    xhr.open('GET', 'lakshay.txt', true);
    
    //what to do on progress. 


    xhr.onprogress = function () {

        let spinner = document.getElementById('fetch-data');

        spinner.innerText = `
              
        <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    
        `;

        console.log("on progress");
    }

    //what to do when response is ready.

    xhr.onload = function () {

        //200 means ok code,

        if (this.status === 200) {

            console.log(this.responseText);
        }

        // else{

        //     console.log("some error occured!");
        // }



    }

    //send the request.

    xhr.send();
}