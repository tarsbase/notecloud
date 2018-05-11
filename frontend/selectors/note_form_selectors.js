export const selectNote = (state, ownProps) => {
  let note;
  if (ownProps.match.params.noteId) {
    note = state.notes[ownProps.match.params.noteId];
  } else {
    const mostRecentNote = Object.values(state.notes).sort((a, b) => {
      a = new Date(a.updated_at);
      b = new Date(b.updated_at);
      return b - a;
    })[0];
    note = mostRecentNote;
  }
  return note;
};
