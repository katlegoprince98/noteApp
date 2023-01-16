const container = document.getElementById("main");
const buttonAdd = container.querySelector("btn");

//declaring functions
//function to get notes
function obtainNote(){
    return JSON.parse(localStorage.getItem("sticky-note") || "[]");
}
//to save note, takes in an array of notes

function savNotes(){
  localStorage.setItem("sticky-note", JSON.stringify(notes));
}

//function to create notes

function createNote(id, noteContent){
  const elm = document.createElement("textarea");


  elm.classList.add("note");
  elm.value = content;
  elm.placeholder = "Add a note";

  

  return elm;
}


//add notes 

function addNote(){

}

//update notes

function updateNote(id, newNoteContent){
  
}

// deletes notes

function deleteNote(){

}