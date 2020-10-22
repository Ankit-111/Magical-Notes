console.log("welcome to magical notes");

showNotes();//to display notes


//function for adding notes
let addbtn = document.getElementById('addBtn');
addbtn.addEventListener("click", function (e) {
  let txt = document.getElementById('addTxt');
  let note = localStorage.getItem("notes");
  if (note == null) {
    noteObj = [];
  }
  else {
    noteObj = JSON.parse(note);
  }
  noteObj.push(txt.value);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  txt.value = "";
  showNotes();
}
);



//function for show notes or display
function showNotes() {
  //  console.log("hello");
  let note = localStorage.getItem("notes");
  if (note == null) {
    noteObj = [];
  }
  else {
    noteObj = JSON.parse(note);
  }
  let html = "";
  noteObj.forEach(function (element, index) {
    // console.log(`${element}`);
    html += `
        <div class="card noteCard my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node</button>
            </div>
        </div>`;
    //   console.log(`${html}`);
  });
  let display = document.getElementById('notes');
  //  notes.innerhtml=html;
  if (noteObj.length != 0) {
    // console.log("kem");
    display.innerHTML = html;
  }
  else {
    display.innerHTML = `Empty Notes`;
  }

}

//function for deleting a node
function deleteNote(index) {
  //console.log("I am deleting",index);
  let note = localStorage.getItem("notes");
  let noteObj = JSON.parse(note);
  noteObj.splice(index, 1);//deleting particular note
  localStorage.setItem("notes", JSON.stringify(noteObj));
  showNotes();

}
//function for search a note
let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
  let val = search.value.toLowerCase();
  let elements=document.getElementsByClassName('noteCard');
  Array.from(elements).forEach(function(element)
  {
      let txt=element.getElementsByTagName('p')[0].innerText;
      if(txt.includes(val))
      {
        element.style.display="block";
      }
      else{
        element.style.display="none";
      }
  });
});

