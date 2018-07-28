export const fetchNotebooks = (page, url) =>
  $.ajax({
    method: 'GET',
    data: { page },
    url
  });

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
