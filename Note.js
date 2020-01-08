

class Note  {
    constructor(title = "", content = "", bg = "white", pinned = false, setToStorage = false) {
        this.title = title;
        this.content = content;
        this.bg = bg;
        this.createdDate = new Date().toISOString();
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
        this.noteContainer  = this.makeNoteContainer();
        this.appendNoteContainer(this.pinned);
        setToStorage ? this.setNoteToLocalStorage() : "";
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
    makeNoteContainer() {
        const noteContainer = document.createElement("div");
        noteContainer.style.backgroundColor = this.bg
        noteContainer.appendChild(this.noteDate)
        noteContainer.appendChild(this.titleHeader);
        noteContainer.appendChild(this.contentParagraph);
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
}

// zapisanie do local Storage


// odczyt z local storage 


