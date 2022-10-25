const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const model = new NotesModel();
model.addNote('Do a load of laundry.');
model.addNote('Take my red top to the dry cleaners.');
model.addNote('Clean off the top of my dresser.');

const view = new NotesView(model);

view.displayNotes();