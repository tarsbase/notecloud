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

export const fetchNotesByNotebook = (page, notebookId) => (
  $.ajax({
    method: 'GET',
    url: `api/notebooks/${notebookId}/notes`,
    data: { page }
  })
);

export const fetchNotesByTag = (page, tagId) => (
  $.ajax({
    method: 'GET',
    url: `api/tags/${tagId}/notes`,
    data: { page }
  })
);

export const fetchShortcutNotes = (page, searchTerm) => {
  let url;
  if (searchTerm) {
    url = `api/notes?shortcut=true?search=${searchTerm}`;
  } else {
    url = `api/notes?shortcut=true`;
  }
  return $.ajax({
    method: 'GET',
    data: { page },
    url
  });
};

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