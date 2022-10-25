class NotesModel {
  constructor() {
    this.notepad = [];
  }

  getNotes() {
    return this.notepad;
  }

  addNote(memo) {
    (this.notepad).push(memo);
  }

  reset() {
    (this.notepad).length = 0
  }
};

module.exports = NotesModel;