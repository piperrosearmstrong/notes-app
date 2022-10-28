const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableFetchMocks();

describe('NotesClient', () => {
  it('requests the list of notes from the backend', (done) => {
    let client = new NotesClient();
    fetch.mockResponseOnce(JSON.stringify({
      name: "name", 
      id: 200
    }));

    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toEqual("name");
      expect(returnedDataFromApi.id).toEqual(200);

      done();
    });
  });
});