export const getTagObject = state => {
  const tagObj = {};
  Object.values(state.tags).forEach(tag => {
    const firstLetter = tag.name[0];
    if (tagObj.firstLetter) {
      tagObj.firstLetter.push(tag);
    } else {
      tagObj[firstLetter] = [tag];
    }
  });
  return tagObj;
};

export const getSortedTags = state => {
  return Object.values(state.tags).sort((a,b) => a.name - b.name);
};