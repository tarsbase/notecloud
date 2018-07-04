import { createNote, updateNote } from '../actions/note_actions';

export const selectState = (state, ownProps) => {
  let note;
  let currentNotebook;
  if (ownProps.match.params.noteId) {
    note = state.notes[ownProps.match.params.noteId];
  } else {
    currentNotebook =
      state.ui.currentNotebook ||
      Object.values(state.notebooks).sort((a, b) => {
        a = new Date(a.updated_at);
        b = new Date(b.updated_at);
        return b - a;
      })[0];
    note = { title: '', body: '', notebook: currentNotebook, tags: [] };
  }
  return note;
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
