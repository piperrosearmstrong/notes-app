class NotesClient {
  constructor() {
  }
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      callback(data);
    })
  }
}

module.exports = NotesClient;
