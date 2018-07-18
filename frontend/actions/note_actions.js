import * as NoteApiUtil from '../util/note_api_util';
import {
  openBannerModal,
  showLoadingSpinner,
  hideLoadingSpinner
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

export const getNotes = (page, actionType) => dispatch => {
  if (actionType === 'concat' && page > 1) {
    dispatch(showLoadingSpinner());
  }
  NoteApiUtil.fetchNotes(page).then(notes => {
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

// export const getNotesAndConcat = page => dispatch => {
//   if (page > 1) {
//     dispatch(showLoadingSpinner());
//   }
//   NoteApiUtil.fetchNotes(page).then(notes => {
//     dispatch(receiveNotesAndConcat(notes));
//     if (page > 1) {
//       dispatch(hideLoadingSpinner());
//     }
//   });
// };

// export const getNotesAndReplace = page => dispatch =>
//   NoteApiUtil.fetchNotes(page).then(notes => {
//     dispatch(receiveNotesAndReplace(notes));
//   });

export const getNote = id => dispatch =>
  NoteApiUtil.fetchNote(id).then(note => dispatch(receiveNote(note)));

export const getNotesByNotebookId = (page, actionType, notebookId) => dispatch => {
  if (actionType === 'concat' && page > 1) {
    dispatch(showLoadingSpinner());
  }
  NoteApiUtil.fetchNotesByNotebook(page, notebookId).then(notes => {
    if (actionType === 'replace') {
      dispatch(receiveNotesAndReplace(notes));
    } else {
      dispatch(receiveNotesAndReplace(notes));
      if (page > 1) {
        dispatch(hideLoadingSpinner());
      }
    }
  });
};

// export const getNotesByNotebookIdAndConcat = (page, notebookId) => dispatch =>
//   NoteApiUtil.fetchNotesByNotebook(page, notebookId).then(notes =>
//     dispatch(receiveNotesAndConcat(notes))
//   );

// export const getNotesByNotebookIdAndReplace = (page, notebookId) => dispatch =>
//   NoteApiUtil.fetchNotesByNotebook(page, notebookId).then(notes =>
//     dispatch(receiveNotesAndReplace(notes))
//   );

export const getNotesByTagId = (page, actionType, tagId) => dispatch => {
         if (actionType === 'concat' && page > 1) {
           dispatch(showLoadingSpinner());
         }
         NoteApiUtil.fetchNotesByTag(page, tagId).then(notes => {
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

// export const getNotesByTagIdAndConcat = (page, tagId) => dispatch =>
//   NoteApiUtil.fetchNotesByTag(page, tagId).then(notes =>
//     dispatch(receiveNotesAndConcat(notes))
//   );

// export const getNotesByTagIdAndReplace = (page, tagId) => dispatch =>
//   NoteApiUtil.fetchNotesByTag(page, tagId).then(notes =>
//     dispatch(receiveNotesAndReplace(notes))
//   );

export const getShortcutNotesAndReplace = page => dispatch =>
  NoteApiUtil.fetchShortcutNotes(page).then(notes =>
    dispatch(receiveNotesAndReplace(notes))
  );

export const getShortcutNotesAndConcat = page => dispatch =>
  NoteApiUtil.fetchShortcutNotes(page).then(notes =>
    dispatch(receiveNotesAndConcat(notes))
  );

export const createNote = note => dispatch =>
  NoteApiUtil.createNote(note).then(newNote => dispatch(receiveNote(newNote)));

export const updateNote = (note, remove = false) => dispatch =>
  NoteApiUtil.updateNote(note).then(updatedNote => {
    if (remove) {
      dispatch(removeNote(updatedNote));
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

export const deleteNote = id => dispatch =>
  NoteApiUtil.destroyNote(id).then(note => dispatch(removeNote(note)));
