document.addEventListener('DOMContentLoaded', appStart);

function appStart() {
    document.querySelector("#send")
            .addEventListener("click", makeNewNote)
    const notesArrFromStorage = JSON.parse(localStorage.getItem("notesArr"));
    console.log(notesArrFromStorage);
    if(notesArrFromStorage) {
        notesArrFromStorage.forEach(item => {
            new Note(item.title, item.content, item.bg, item.pinned, )
        })
    }
}



function makeNewNote() {
    const noteContent = document.querySelector("#noteContent")
                                .value;
    const noteTitle = document.querySelector("#noteTitle")
        .value;
    const noteColor = document.querySelector("#color")
        .value;
    const isNotePinned = document.querySelector("#pick")
        .checked;

    new Note(noteTitle, noteContent, noteColor, isNotePinned, true)
}