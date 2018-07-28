export const fetchNotes = (page, url) => {
  return $.ajax({
    method: 'GET',
    data: { page },
    url
  });
};

export const fetchNote = id => (
  $.ajax({
    method: 'GET',
    url: `api/notes/${id}`
  })
);

export const createNote = note => (
  $.ajax({
    method: 'POST',
    url: `api/notes`,
    data: { note }
  })
);

export const updateNote = note => (
  $.ajax({
    method: 'PATCH',
    url: `api/notes/${note.id}`,
    data: { note }
  })
);

export const destroyNote = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/notes/${id}`
  })
);