console.log("welcome to notes app this is app.js");

//when we reload our notes will disappear so for appearing the notes when we reloads our screen , so we will call shownotes for that.

showNotes();


//if user adds a note, add it to the localStorage

//adding the event listener

let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');

    //whichever value localstorage have in notes give that output

    let notes = localStorage.getItem("notes");


    //will store the notes in an array form

    if (notes == null) {
        notesObj = [];
    }
    else if (addTxt.textLength == 0) {
        alert("Notes cannot be empty!");

    }
    else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        title:addTitle.value,
        text:addTxt.value
    }
    notesObj.push(myObj);

    //updating local storage

    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);




    //for showing notes

    showNotes();

})

function showNotes() {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }


    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function (element, index) {

        //adding the card
        html += `

        <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">Note ${element.title}
            </h5>
            <p class="card-text"> ${element.text}</p>
            <button id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>  `;


        //this.id will give the id of the current note
    });

    let notesElm = document.getElementById('notes');

    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! "Add a Note" section above to add notes/`;
    }
}



//function for delete the note

function deleteNote(index) {

    //this index will print the index of the curretn note
    // console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }


    else {
        notesObj = JSON.parse(notes);
    }


    //splice , first argument fro where to you want to remove element and second argument is how much argument u want to delete.


    notesObj.splice(index, 1);
    //updating the local storage again

    //this will delete the required note

    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();
}
//extracting the searchTxt

let search = document.getElementById('searchTxt');

search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log("input event fired!", inputVal);


    //checking the content if its matching we will show the content othervise we will hide it

    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach(function (element) {

        //printing the first tag which is matching

        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if (cardTxt.includes(inputVal)) {

            element.style.display = "block";
        }
        else {

            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})



//Further features

// 1. ADD title - search by title or search by note.
//2. mark note - as important note , by making its colour to red.
