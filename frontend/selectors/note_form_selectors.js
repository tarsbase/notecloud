import { createNote, updateNote } from '../actions/note_actions';

export const selectState = (state, ownProps) => {
  let note;
  let currentNotebook;
  if (ownProps.match.params.noteId) {
    note = state.notes[ownProps.match.params.noteId];
    // currentNotebook = note.notebook.id;
  } else {
    note = { title: '', body: '' };
    currentNotebook = Object.values(state.notebooks).sort((a, b) => {
      a = new Date(a.updated_at);
      b = new Date(b.updated_at);
      return b - a;
    })[0];
  }
  return { note, currentNotebook };
};

export const selectAction = ownProps => {
  let action;
  if (ownProps.match.params.noteId) {
    action = updateNote;
  } else {
    action = createNote;
  }

  return action;
};
