class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');

    this.client.loadNotes(note => {
      this.displayNotesFromApi(note);
    });

    document.querySelector('#add-note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();

    const blankInput = document.querySelector('#add-note-input');
    blankInput.value = '';
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    }); 

    const notes = this.model.getNotes()

    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

  displayNotesFromApi(note) {
    this.model.setNotes(notes);
    view.displayNotes();
  }
}

module.exports = NotesView;