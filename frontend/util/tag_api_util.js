export const fetchAllTags = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tags'
  })
);

export const fetchTag = id => (
  $.ajax({
    method: 'GET',
    url: `api/tags/${id}`
  })
);

export const createTag = tag => (
  $.ajax({
    method: 'POST',
    url: 'api/tags',
    data: { tag }
  })
);

export const updatetag = tag => (
  $.ajax({
    method: 'PATCH',
    url: `api/tags/${tag.id}`,
    data: { tag }
  })
);

export const destroyTag = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/tags/${id}`
  })
);