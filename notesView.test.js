/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesClient = require('./notesClient');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView'); 

require('jest-fetch-mock').enableFetchMocks();

describe('Notes view', () => {
  // it('displays two notes', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');

  //   const model = new NotesModel();
  //   const view = new NotesView(model);
  //   model.addNote('A first note');
  //   model.addNote('Another one');

  //   view.displayNotes();

  //   expect(document.querySelectorAll('div.note').length).toEqual(2);
  // });

  it('adds a note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);

    const input = document.querySelector('#add-note-input');
    input.value = "This is a test note.";
    const button = document.querySelector('#add-note-button');
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual("This is a test note.");
  });

  it('clears previous notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('Note One');
    model.addNote('Note Two');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it("notesView class", () => {

    const mockClient = {
      loadNotes: (fn) => {
        fn(['This note is coming from the server']);
      }
    }

    const model = new NotesModel();
    const view = new NotesView(model, mockClient);

    view.displayNotesFromApi();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual(
      'This note is coming from the server');
  });
});