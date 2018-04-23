export const fetchAllNotes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/notes'
  })
);

export const fetchNote = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/notes/${id}`
  })
);