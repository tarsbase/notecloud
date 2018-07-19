export const fetchNotebooks = (page, searchTerm) => {
  let url;
  if (searchTerm) {
    url = `api/notebooks?search=${searchTerm}`;
  } else {
    url = `api/notebooks`;
  }
  return $.ajax({
    method: 'GET',
    url,
    data: { page }
  });
};

export const fetchNotebook = id =>
  $.ajax({
    method: 'GET',
    url: `api/notebooks/${id}`
  });

export const createNotebook = notebook =>
  $.ajax({
    method: 'POST',
    url: `api/notebooks`,
    data: { notebook }
  });

export const updateNotebook = notebook =>
  $.ajax({
    method: 'PATCH',
    url: `api/notebooks/${notebook.id}`,
    data: { notebook }
  });

export const destroyNotebook = id =>
  $.ajax({
    method: 'DELETE',
    url: `api/notebooks/${id}`
  });
