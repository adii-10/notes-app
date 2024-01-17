const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function createNewNote() {
    const inputBox = document.createElement("p");
    const img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "image/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
}

function deleteNote(target) {
    if (target.tagName === "IMG") {
        target.parentElement.remove();
        updateStorage();
    }
}

function handleKeyUp(event) {
    if (event.target.tagName === "P") {
        updateStorage();
    }
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
}

createBtn.addEventListener("click", createNewNote);

notesContainer.addEventListener("click", (event) => {
    deleteNote(event.target);
});

notesContainer.addEventListener("keyup", (event) => {
    handleKeyUp(event);
});

document.addEventListener("keydown", (event) => {
    handleKeyDown(event);
});

// Add event listener for the hand cursor on the delete image
notesContainer.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "IMG") {
        event.target.style.cursor = "pointer";
    }
});

showNotes();
