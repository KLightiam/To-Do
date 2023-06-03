export default function createNote(parentDiv){
    let note = document.createElement('div');
    let noteLabel = document.createElement('label');
    noteLabel.textContent = 'Note';
    let noteInput = document.createElement("textarea");
    noteInput.setAttribute('id','noteInput');
    note.append(noteLabel,noteInput);
    parentDiv.appendChild(note);
}