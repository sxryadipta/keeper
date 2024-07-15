// Set the current date
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// Get DOM elements
const createArea = document.getElementById("create-area");
const notesSection = document.getElementById("notes");
const createButton = document.getElementById("create");

function createNote() {
  // Create a textarea inside createArea
  const textarea = document.createElement("textarea");
  textarea.setAttribute("placeholder", "Enter your note...");
  textarea.setAttribute("rows", "4");
  textarea.classList.add("create-area__textarea");
  createArea.appendChild(textarea);

  // Create a button inside createArea
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.classList.add("create-area__button");
  saveButton.addEventListener("click", saveNote);
  createArea.appendChild(saveButton);

  // Create a delete button inside createArea
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("create-area__button");
  deleteButton.addEventListener("click", deleteNote);
  createArea.appendChild(deleteButton);
}

function saveNote() {
  // Get the note content from the textarea
  const noteContent = document.querySelector("textarea").value;

  // Create a new note element
  const note = document.createElement("div");
  note.textContent = noteContent;
  //Style the note element
  note.style.border = "1px solid #ccc";
  note.style.padding = "10px";
  note.style.marginBottom = "10px";

  // Create a delete button inside the note element
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    notesSection.removeChild(note);
  });
  note.appendChild(deleteButton);

  // Append the note to the notes section
  notesSection.appendChild(note);

  // Clear the textarea and buttons
  const textarea = document.querySelector("textarea");
  textarea.value = "";
  createArea.removeChild(textarea);
  createArea.removeChild(createArea.querySelector("button"));
  createArea.removeChild(createArea.querySelector("button"));
}

function deleteNote(note) {
  notesSection.removeChild(note.parentNode);
}

// Add event listener to the create button
createButton.addEventListener("click", createNote);
