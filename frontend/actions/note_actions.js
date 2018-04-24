import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const REMOVE_NOTE = 'REMOVE_NOTE';

const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

const receiveAllNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

const removeNote = note => ({
  type: REMOVE_NOTE,
  note
});

export const getAllNotes = () => dispatch =>
  NoteApiUtil.fetchAllNotes().then(notes => dispatch(receiveAllNotes(notes)));

export const getNote = id => dispatch =>
  NoteApiUtil.fetchNote(id).then(note => dispatch(receiveNote(note)));

export const getNotesByNotebookId = notebookId => dispatch =>
  NoteApiUtil.fetchNotesByNotebook(notebookId).then(notes =>
    dispatch(receiveAllNotes(notes))
  );
