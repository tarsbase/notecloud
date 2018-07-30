import * as NoteApiUtil from '../util/note_api_util';
import {
  openBannerModal,
  showLoadingSpinner,
  hideLoadingSpinner,
  openShortcutsModal
} from './ui_actions';

export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const RECEIVE_NOTES_AND_CONCAT = 'RECEIVE_NOTES_AND_CONCAT';
export const RECEIVE_NOTES_AND_REPLACE = 'RECEIVE_NOTES_AND_REPLACE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

const receiveNotesAndConcat = notes => ({
  type: RECEIVE_NOTES_AND_CONCAT,
  notes
});

const receiveNotesAndReplace = notes => ({
  type: RECEIVE_NOTES_AND_REPLACE,
  notes
});

const removeNote = note => ({
  type: REMOVE_NOTE,
  note
});

export const getNotes = (page, actionType, opts) => dispatch => {
  const defaultOpts = {
    searchTerm: null,
    notebookId: null,
    tagId: null,
    shortcuts: false
  };
  opts = Object.assign({}, defaultOpts, opts);
  let url;
  if (opts.notebookId) {
    url = `api/notebooks/${opts.notebookId}/notes`;
  } else if (opts.tagId) {
    url = `api/tags/${opts.tagId}/notes`;
  } else if (opts.shortcuts) {
    url = `api/notes?shortcut=true`;
  } else {
    url = `api/notes`;
  }
  if (opts.searchTerm) {
    const char = opts.shortcuts ? '&' : '?';
    url += `${char}search=${opts.searchTerm}`;
  }
  if (actionType === 'concat' && page > 1) {
    dispatch(showLoadingSpinner());
  }
  NoteApiUtil.fetchNotes(page, url).then(notes => {
    if (actionType === 'replace') {
      dispatch(receiveNotesAndReplace(notes));
    } else {
      dispatch(receiveNotesAndConcat(notes));
      if (page > 1) {
        dispatch(hideLoadingSpinner());
      }
    }
  });
};

export const getNote = id => dispatch =>
  NoteApiUtil.fetchNote(id).then(note => dispatch(receiveNote(note)));

export const createNote = note => dispatch =>
  NoteApiUtil.createNote(note).then(newNote => dispatch(receiveNote(newNote)));

export const updateNote = (note, remove = false) => dispatch => {
  console.log("NOTE", note);
  NoteApiUtil.updateNote(note).then(updatedNote => {
    console.log("UPDATED", updatedNote);
    if (remove) {
      dispatch(removeNote(updatedNote));
      return;
    } else {
      dispatch(receiveNote(updatedNote));
      if (note.notebook.name !== updatedNote.notebook.name) {
        dispatch(
          openBannerModal(`Note has been moved to ${updatedNote.notebook.name}`)
        );
      } else {
        dispatch(openBannerModal('Note has been updated'));
      }
    }
  });
};

export const deleteNote = id => dispatch =>
  NoteApiUtil.destroyNote(id).then(note => dispatch(removeNote(note)));
