

class Note  {
    constructor(title = "", content = "", bg = "white", pinned = false, setToStorage = false, date = false) {
        this.title = title;
        this.content = content;
        this.bg = bg;
        this.createdDate = date ? date : new Date().toISOString();
        this.pinned = pinned;
        this.notesArr = [];
        this.noteObj = {
            title: this.title,
            date: this.createdDate,
            content: this.content,
            bg: this.bg,
            pinned: this.pinned
        };
        this.noteDate = this.makeNoteDate();
        this.titleHeader = this.makeNoteTitle();
        this.contentParagraph = this.makeNoteContent();
        this.deleteBtn = this.makeDeleteBtn();
        this.noteContainer  = this.makeNoteContainer();
        this.appendNoteContainer(this.pinned);
        setToStorage ? this.setNoteToLocalStorage() : "";
        this.deleteBtn.addEventListener("click", this.removeNote);
    }

    makeNoteTitle() {
        const titleHeader = document.createElement("h3");
        titleHeader.innerHTML = this.title;
        return titleHeader;
    }
    makeNoteContent() {
        const contentParagraph = document.createElement("p");
        contentParagraph.innerHTML = this.content;
        return contentParagraph
    }
    makeNoteDate() {
        const noteDate = document.createElement("p");
        noteDate.innerHTML = this.createdDate;
        return noteDate
    }
    makeDeleteBtn() {
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "DELETE";
        deleteBtn.classList.add("deleteBtn");
        return deleteBtn;
    }
    makeNoteContainer() {
        const noteContainer = document.createElement("div");
        noteContainer.style.backgroundColor = this.bg
        noteContainer.appendChild(this.noteDate)
        noteContainer.appendChild(this.titleHeader);
        noteContainer.appendChild(this.contentParagraph);
        noteContainer.appendChild(this.deleteBtn);
        return noteContainer;
    }
    appendNoteContainer(pinned) {
        pinned  ? document.querySelector("#notesContainer")
                .insertAdjacentElement('afterbegin', this.noteContainer)
                : document.querySelector("#notesContainer")
                .appendChild(this.noteContainer);
        this.notesArr.push(this.noteContainer);
    }
    setNoteToLocalStorage() {
        let notesArrFromStorage = JSON.parse(localStorage.getItem("notesArr"));
        if(!notesArrFromStorage) {
            notesArrFromStorage = [];
        }
        notesArrFromStorage.push(this.noteObj);
        localStorage.setItem("notesArr", JSON.stringify(notesArrFromStorage))
    }
    removeNote() {
        this.parentElement.remove();
        const notesArrFromStorage = JSON.parse(localStorage.getItem("notesArr"));
        notesArrFromStorage.forEach((item, index) => {
            console.log(this.parentElement.firstChild.innerHTML)
            console.log(item.date)
            console.log(this.parentElement.firstChild.innerHTML == item.date)
            if(item.date == this.parentElement.firstChild.innerHTML) {
                const newNotesArr = notesArrFromStorage.filter(el => el != item)
                localStorage.setItem("notesArr", JSON.stringify(newNotesArr));
            }
        })
    }
}


