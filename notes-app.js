/**
 * Class Note that creates the note.
 * @param {string} author the author name of the note.
 * @param {string} note_content The note to be stored in the list of notes.
 * @constructor
 */
class Note {
  // constructor for Note Class
  constructor(author, note_content) {
    this.author = author;
    this.note = note_content;
  }
}

/**
 * Class NoteApplication that creates the note application.
 * @param {string} author the author name of the note.
 * @extends {Note}
 * @constructor
 */
class NotesApplication {
  //constructor for NoteApplication Class
  constructor(author) {
    this.name = author;
    this.notes = [];
  }
