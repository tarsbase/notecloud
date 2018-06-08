export const createTagging = (tag, note) =>
  $.ajax({
    method: 'POST',
    url: `api/taggings`,
    data: { tag, note }
  });
