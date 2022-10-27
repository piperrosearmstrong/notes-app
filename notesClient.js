class NotesClient {
  loadNotes(note){
    fetch('https://localhost:300/notes' + note)
    .then(response => response.json())
    .then(data => {
      return note(data);
    });
  }
}

module.exports = NotesClient;