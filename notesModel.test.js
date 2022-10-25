const NotesModel = require('./notesModel');

describe ('NotesModel', () => {
  it('returns an array of notes', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual( [ 'Buy milk', 'Go to the gym' ] );
  });

  it('adds a note', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    expect(model.getNotes()).toEqual( [ 'Buy milk' ] );
  });

  it('resets the notes', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});